import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from 'react';
import { View, Dimensions } from 'react-native';
import { Camera } from 'expo-camera'

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
      console.log(source)
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
      />
      <Button onClick={onSnap} />
    </View>
  );
}

export default App
