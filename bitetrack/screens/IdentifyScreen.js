import React from 'react';
import { StyleSheet, SafeAreaView, Image, TouchableOpacity} from 'react-native';

export default function IdentifyScreen( {navigation, route} ) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.title}
        source={require('../assets/foodtitle.png')}/>
        <Image
          style={styles.image}
          source={route.params.imageData}
        />
      <TouchableOpacity onPress={() => {
          navigation.navigate("Breakdown", {imageData: route.params.imageData})}}>
        <Image
        style={styles.foodbutton}
        source={require('../assets/pho.png')}/>
      </TouchableOpacity>
        <Image
        style={styles.foodbutton}
        source={require('../assets/instantnoodles.png')}/>
        <Image
        style={styles.foodbutton}
        source={require('../assets/chickensoup.png')}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 360,
    width: 348,
    margin: 10,
    bottom: 14,
  },
  title: {
    height: 21,
    width: 232,
    bottom: 40
  },
  foodbutton: {
    height: 50,
    width: 240,
    margin: 14
  }

});