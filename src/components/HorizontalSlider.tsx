import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {Movie} from '../interfaces/movieInterfaces';
import {MovieCard} from './MovieCard';

interface Props {
  title?: string;
  movies: Movie[];
}

export const HorizontalSlider = ({title, movies}: Props) => {
  return (
    <View style={{height: title ? 260 : 220}}>
      {title && (
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            marginLeft: 10,
            marginBottom: 10,
            color: 'white',
          }}>
          {title}
        </Text>
      )}

      <FlatList
        data={movies}
        renderItem={({item}) => (
          <MovieCard movie={item} width={140} height={200} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
