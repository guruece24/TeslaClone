import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import CarItem from './components/CarItem';

export default function App() {
  return (
    <View style={styles.container}>
     <CarItem name={"Model X"} 
              tagline={"Starting from $99,500"}
              image={require('./assets/images/ModelX.jpeg')} ></CarItem>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
