import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from 'react';
import { View, Dimensions, Platform, Image, StyleSheet, ScrollView, Text } from 'react-native';
import { Camera, Constants } from 'expo-camera'

import { getURI } from './utils/utils'

import Button from './components/Button'

const WINDOW_WIDTH = Dimensions.get('window').width;

const App = () => {
  const cameraRef = useRef<Camera | null>();
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [cameraRatio, setCameraRatio] = useState("");
  const [aspectRatio, setAspectRatio] = useState(1.333)
  const [showCamera, setShowCamera] = useState<boolean>(true)
  const [words, setWords] = useState()

  useEffect(() => {
    onHandlePermission();
  }, []);

  const onHandlePermission = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  const onSnap = async () => {
    if (cameraRef.current) {
      const options = { base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      const source = data.base64;

      try {
        if (source) {
          const apiUrl = getURI();
          const response = await fetch(apiUrl, {
            body: JSON.stringify({ file: source }),
            headers: {
              'content-type': 'application/json'
            },
            method: 'POST'
          })
          const data = await response.json()
          alert('Upload successful');
          console.log(data)
        }
      } catch (err) {
        alert('Cannot upload');
        console.log(err);
      }
    }
  }

  const prepareRatio = async () => {
    if (Platform.OS === 'android') {
      const ratios = await cameraRef.current?.getSupportedRatiosAsync();
      if (ratios) {
        let ratioIndex = ratios.findIndex(ratio => ratio === "4:3");
        if (ratioIndex === -1) {
          for (let i = 0; i < ratios.length; i++) {
            if (ratios[i] < ratios[ratioIndex]) {
              ratioIndex = i
            }
          }
        }
        const ratio = ratios[ratioIndex]
        const parts = ratio.split(':');
        const aspectRatio = parseInt(parts[0]) / parseInt(parts[1]);

        setCameraRatio(ratio)
        setAspectRatio(aspectRatio)
      }
    }
  }

  if (!hasPermission) {
    return <View></View>
  }

  if (showCamera) {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Camera 
          ref={(camera) => {
            cameraRef.current = camera
          }}
          style={{
            height: WINDOW_WIDTH * aspectRatio,
            width: WINDOW_WIDTH
          }}
          onCameraReady={prepareRatio}
          ratio={cameraRatio}
          useCamera2Api={true}
          type={Constants.Type.back}
        />
        <View style={styles.buttonContainer}>
          <Button onClick={onSnap} />
        </View>
        <Image
          source={require('./assets/grid.png')}
          style={{
            position: 'absolute', 
            left: WINDOW_WIDTH * .1, 
            top: ((WINDOW_WIDTH * (aspectRatio)) / 2) - (WINDOW_WIDTH * .8 / 2), 
            height: WINDOW_WIDTH * .8, 
            width: WINDOW_WIDTH * .8
          }}
        />
      </View>
    );
  } else {
    return (
      <ScrollView>
        <Text>Words found</Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4d456',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App
