import * as React from 'react';
import { StyleSheet, SafeAreaView} from 'react-native';
import { RNCamera } from 'react-native-camera';

export default function CameraScreen( {navigation} ) {
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