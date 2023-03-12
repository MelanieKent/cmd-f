import * as React from 'react';
import { StyleSheet, SafeAreaView} from 'react-native';

export default function PieScreen( {navigation} ) {
    return (
      <SafeAreaView style={styles.container}>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
    alignItems: 'center',
    justifyContent: 'center',
  }
});