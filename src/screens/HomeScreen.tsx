import React, {useContext} from 'react';
import {
  ActivityIndicator,
  ActivityIndicatorBase,
  Dimensions,
  FlatList,
  ScrollView,
  Text,
  View,
} from 'react-native';
import ImageColors from 'react-native-image-colors';
import Carousel from 'react-native-snap-carousel';
import {useMovies} from '../hooks/useMovies';
import {MovieCard} from '../components/MovieCard';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HorizontalSlider} from '../components/HorizontalSlider';
import {GradientBackground} from '../components/GradientBackground';
import {getImageColors} from '../helpers/getColors';
import {GradienContext} from '../context/GradientContext';
import {useEffect} from 'react';

const {width: windowWith} = Dimensions.get('window');

export const HomeScreen = () => {
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();
  const {setMainColors, setPrevMainColors} = useContext(GradienContext);

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const [primary = 'green', secondary = 'orange'] = await getImageColors(uri);

    setMainColors({primary, secondary});
  };

  useEffect(() => {
    if (nowPlaying.length > 0) {
      getPosterColors(0);
    }
  }, [nowPlaying]);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator color={'#999999'} size={'large'} />
      </View>
    );
  }

  return (
    <ScrollView>
      <GradientBackground>
        <View style={{marginTop: top + 20}}>
          {/* Carousel principal */}

          <Carousel
            data={nowPlaying}
            renderItem={({item}) => <MovieCard movie={item} />}
            sliderWidth={windowWith}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
            onSnapToItem={index => getPosterColors(index)}
          />
        </View>
      </GradientBackground>
      <View style={{backgroundColor: 'black'}}>
        <HorizontalSlider title="Popular" movies={popular} />
        <HorizontalSlider title="Top Rated" movies={topRated} />
        <HorizontalSlider title="Upcoming Soon" movies={upcoming} />
      </View>
    </ScrollView>
  );
};
