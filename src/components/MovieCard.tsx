import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {Movie} from '../interfaces/movieInterfaces';
import {useNavigation} from '@react-navigation/core';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {RootStackParams} from '../navigation/navigation';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MovieCard = ({movie, width = 300, height = 420}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{...styles.shadow, width, height}}
      onPress={() =>
        navigation.navigate('DetailScreen' as never, movie as never)
      }
      activeOpacity={0.75}>
      <View style={{...styles.imgContainer, flex: 1}}>
        <Image source={{uri}} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  shadow: {
    borderRadius: 18,
    marginHorizontal: 8,
    paddingBottom: 5,
    paddingHorizontal: 5,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 7,

    elevation: 9,
  },
  imgContainer: {},
});
