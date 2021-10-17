import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, Dimensions } from 'react-native';
import { Camera } from 'expo-camera'

const WINDOW_WIDTH = Dimensions.get('window').width;

export default function App() {
  
  const [hasPermission, setHasPermission] = useState<boolean>(false);

  useEffect(() => {
    onHandlePermission();
  }, []);

  const onHandlePermission = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  if (!hasPermission) {
    return <View></View>
  }

  return (
    <View>
      <StatusBar style="auto" />
      <Camera 
        style={{ height: WINDOW_WIDTH, width: WINDOW_WIDTH}}
      />
    </View>
  );
}
