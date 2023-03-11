import * as React from 'react';
import { StyleSheet, SafeAreaView, Alert} from 'react-native';
import { RNCamera } from 'react-native-camera';

export default function CameraScreen( {navigation} ) {
    return (
      <SafeAreaView style={styles.container}>
        <RNCamera
        style={{flex: 1, alignItems: 'center '}}
        ref={ref => {
          this.camera = ref
        }}
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
  }
});
