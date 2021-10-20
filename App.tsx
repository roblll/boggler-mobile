import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from 'react';
import { View, Dimensions, Platform } from 'react-native';
import { Camera } from 'expo-camera'

import { getURI } from './utils/utils'

import Button from './components/Button'

const WINDOW_WIDTH = Dimensions.get('window').width;

const App = () => {
  const cameraRef = useRef<Camera | null>();
  const [hasPermission, setHasPermission] = useState<boolean>(false);

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
        console.log(ratio, aspectRatio)
      }
      
      // const parts = ratio.split(':');
    }
  }

  if (!hasPermission) {
    return <View></View>
  }

  return (
    <View>
      <StatusBar style="auto" />
      <Camera 
        ref={(camera) => {
          cameraRef.current = camera
        }}
        style={{ height: WINDOW_WIDTH, width: WINDOW_WIDTH}}
        onCameraReady={prepareRatio}
      />
      <Button onClick={onSnap} />
    </View>
  );
}

export default App
