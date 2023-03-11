import * as React from 'react';
import { StyleSheet, SafeAreaView, Image, TouchableOpacity} from 'react-native';

export default function HomeScreen( {navigation} ) {
    return (
        <SafeAreaView style={styles.container}>
        <Image
        style={styles.icon}
        source={require('../assets/homeicon.png')}/>
      <TouchableOpacity
      onPress={() => navigation.navigate("Camera")}>
        <Image
        style={styles.trackButton}
        source={require('../assets/trackbutton.png')}/>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => navigation.navigate("Pie")}>
        <Image 
        style={styles.historyButton}
        source={require('../assets/historybutton.png')}/>
      </TouchableOpacity>
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
  icon: {
    width: 320,
    height: 250,
    margin: 34,
  },
  trackButton: {
    width: 180,
    height: 60,
    margin: 24,
  },
  historyButton: {
    width: 205,
    height: 60,
    margin: 18,
  }
});
