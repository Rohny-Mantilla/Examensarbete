import React, {useContext} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {GradienContext} from '../context/GradientContext';
import {useEffect} from 'react';
import {useFade} from '../hooks/useFade';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const GradientBackground = ({children}: Props) => {
  const {colors, prevColors, setPrevMainColors} = useContext(GradienContext);
  const {opacity, fadeIn, fadeOut} = useFade();

  useEffect(() => {
    fadeIn(() => {
      setPrevMainColors(colors);
      fadeOut();
    });
  }, [colors]);

  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={[prevColors.primary, prevColors.secondary, 'black']}
        style={{...StyleSheet.absoluteFillObject}}
        start={{x: 0.1, y: 0.1}}
        end={{x: 0.5, y: 0.7}}
      />
      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          opacity,
        }}>
        <LinearGradient
          colors={[colors.primary, colors.secondary, 'black']}
          style={{...StyleSheet.absoluteFillObject}}
          start={{x: 0.6, y: 0.1}}
          end={{x: 0.5, y: 0.9}}
        />
      </Animated.View>
      {children}
    </View>
  );
};
