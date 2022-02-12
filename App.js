import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import CarItem from './components/CarItem';

export default function App() {
  return (
    <View style={styles.container}>
     <CarItem name={"Model 3"} 
              tagline={"Starting from $99,500"}
              image={require('./assets/images/Model3.jpeg')} ></CarItem>

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
