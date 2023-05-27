import React from 'react';
import {FlatList, Text, View} from 'react-native';
import currencyFormatter from 'currency-formatter';

import Icon from 'react-native-vector-icons/Ionicons';
import {Cast} from '../interfaces/creditInterface';
import {FullMovie} from '../interfaces/movieInterfaces';
import {CastItem} from './CastItem';

interface Props {
  fullMovie: FullMovie;
  cast: Cast[];
}

export const MovieDetails = ({fullMovie, cast}: Props) => {
  return (
    <View>
      {/* Detalles */}
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" color="grey" size={16} />
          <Text> {fullMovie.vote_average.toFixed(1)}</Text>
          <Text style={{marginLeft: 5}}>
            {' '}
            - {fullMovie.genres.map(g => g.name).join(', ')}{' '}
          </Text>
        </View>
        {/* Historia*/}
        <Text style={{fontSize: 24, marginTop: 10, fontWeight: 'bold'}}>
          Historia
        </Text>
        <Text style={{fontSize: 15}}>{fullMovie.overview}</Text>
        {/* Presupuesto*/}
        <Text style={{fontSize: 24, marginTop: 10, fontWeight: 'bold'}}>
          Presupuesto
        </Text>
        <Text style={{fontSize: 18}}>
          {currencyFormatter.format(fullMovie.budget, {code: 'USD'})}
        </Text>
      </View>

      {/* Cast */}
      <View style={{marginTop: 10, marginBottom: 100}}>
        <Text
          style={{
            fontSize: 24,
            marginTop: 10,
            fontWeight: 'bold',
            marginHorizontal: 20,
          }}>
          Actores
        </Text>

        <FlatList
          data={cast}
          keyExtractor={actor => actor.id.toString()}
          renderItem={({item}) => <CastItem actor={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{marginTop: 10, height: 70}}
        />
      </View>
    </View>
  );
};
