import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Dimensions } from 'react-native';
import { Camera } from 'expo-camera'

const WINDOW_WIDTH = Dimensions.get('window').width;

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <Camera 
        style={{ height: WINDOW_WIDTH, width: WINDOW_WIDTH}}
      />
    </View>
  );
}
