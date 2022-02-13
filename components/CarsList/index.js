import React from 'react';
import { Text, View, FlatList } from 'react-native';
import CarItem from '../CarItem';

import styles  from './styles';
import cars from './cars';

const CarsList = (props) => {
  return (
    <View styles={styles.container}>
      <FlatList 
          data={cars}
          renderItem={({item}) => <CarItem car={item} 
         />}
         keyExtractor={cars.item}
       />
    </View>
  )
}

export default CarsList
