import { StyleSheet, SafeAreaView, Button, Text, Image, TouchableOpacity} from 'react-native';
import { useEffect, useRef, useState} from 'react';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

export default function CameraScreen() {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");

    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>
  } else if (!hasCameraPermission) {
    return <Text>Permission for camera not granted. Please change in settings.</Text>
  }

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };
  
  if (photo) {
    let savePhoto = () => {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.preview} source={{ uri: "data:iamge/jpg;base64," + photo.base64 }} />
        {hasMediaLibraryPermission ? 
          <TouchableOpacity onPress={savePhoto}>
            <Image 
              style={styles.savepic}
              source={require('../assets/save.png')}/>
          </TouchableOpacity> : undefined}
          <TouchableOpacity onPress={() => setPhoto(undefined)}>
            <Image 
              style={styles.retakepic}
              source={require('../assets/retake.png')}/>
          </TouchableOpacity>
      </SafeAreaView>
    );
  }

    return (
      <Camera type={CameraType.back} style={{height: 780}} styles={styles.container} ref={cameraRef} onCameraReady={() => console.log('camera ready')}>
           <SafeAreaView style={styles.buttonContainer}>
        <Image style={styles.preview} source={undefined} />
        <TouchableOpacity onPress={takePic} style={{}}>
          <Image 
          style={styles.takepic}
          source={require('../assets/takepicture.png')}/>
        </TouchableOpacity>
      </SafeAreaView>
      </Camera>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: '#0000',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40
  },
  preview: {
    backgroundColor: 'transparent',
    flex: 1,
    alignSelf: 'stretch',
  },
  takepic: {
    height: 48,
    width: 224,
  },
  savepic: {
    height: 44,
    width: 100,
    margin: 10
  },
  retakepic: {
    height: 44,
    width: 130,
    margin: 10
  }
});