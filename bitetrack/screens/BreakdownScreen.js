import { StyleSheet, SafeAreaView, Image, TouchableOpacity} from 'react-native';

export default function BreakdownScreen( {navigation, route} ) {
  return (
    <SafeAreaView style={styles.container}>
        <Image
          style={styles.phoinfoheader}
          source={require('../assets/phoinfoheader.png')}
          />
        <Image
          style={styles.breakdownimage}
          source={route.params.imageData}
          />
          <Image
          style={styles.phodata}
          source={require('../assets/phodata.png')}
          />
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image
             style={styles.returnhomebutton}
             source={require('../assets/returnhome.png')}
           />
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
  phoinfoheader: {
    height: 90,
    width: 340,
    bottom: 4
  },
  breakdownimage: {
    height: 300,
    width: 348,
    margin: 20
  },
  phodata: {
    height: 240,
    width: 274,
    bottom: 4,
    margin: 18,
    alignSelf: 'flex-start'
  },
  returnhomebutton: {
    height: 40,
    width: 120,
    margin: 10
  }
});