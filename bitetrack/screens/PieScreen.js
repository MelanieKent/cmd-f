import { StyleSheet, SafeAreaView, Image} from 'react-native';

export default function PieScreen( {navigation} ) {
  return (
    <SafeAreaView style={styles.container}>
          <Image
          style={styles.piechart}
          source={require('../assets/piechart.png')}
          />
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
  piechart: {
    height: 594,
    width: 348,
    bottom: 30,
  }
});