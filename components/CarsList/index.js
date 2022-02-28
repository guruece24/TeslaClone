import React from 'react';
import { Text, View, FlatList, Dimensions } from 'react-native';
import CarItem from '../CarItem';

import styles  from './styles';
import cars from './cars';

const CarsList = (props) => {
  return (
    <View styles={styles.container}>
      <FlatList 
          data={cars}
          renderItem={({item}) => <CarItem car={item} />}
          showsVerticalScrollIndicator={false}
          snapToAlignment={'start'} 
          decelerationRate={'fast'}
          snapToInterval={Dimensions.get('window').height}         
        //  keyExtractor={cars.item}
       />
    </View>
  )
}

export default CarsList
