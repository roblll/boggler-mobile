import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from 'react';
import { View, Dimensions, Platform, Image, StyleSheet, Button } from 'react-native';
import { Camera, Constants } from 'expo-camera';
import { manipulateAsync, SaveFormat } from 'expo-image-manipulator';

import { getURI } from './utils/utils';

import SnapButton from './components/Button';
import WordsList from './components/WordsList';

const WINDOW_WIDTH = Dimensions.get('window').width;

const App = () => {
  const cameraRef = useRef<Camera | null>();
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [cameraRatio, setCameraRatio] = useState("");
  const [aspectRatio, setAspectRatio] = useState(1.333)
  const [showCamera, setShowCamera] = useState<boolean>(true)
  const [words, setWords] = useState([])

  useEffect(() => {
    onHandlePermission();
  }, []);

  const onHandlePermission = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  const onSnap = async () => {
    if (cameraRef.current) {
      try {
        const options = { base64: true, exif: true, skipProcessing: true };
        const data = await cameraRef.current.takePictureAsync(options);
        const source = data.base64;
        const uri = data.uri;
        const imageHeight = data.height > data.width ? data.height : data.width;
        const imageWidth = data.width < data.height ? data.width: data.height;
        const croppedWidth = imageWidth * .8;
        const originX = imageWidth * .1;
        const croppedHeight = croppedWidth;
        const originY = (imageHeight - croppedHeight) / 2;
        
        if (source) {
          const processedImage = await manipulateAsync(
            uri,
            [
              { crop: { originX: originX, originY: originY, height: croppedHeight, width: croppedWidth }}
            ],
            { compress: 1, format: SaveFormat.JPEG, base64: true }
          );

          const apiUrl = getURI();
          const response = await fetch(apiUrl, {
            body: JSON.stringify({ file: processedImage.base64 }),
            headers: {
              'content-type': 'application/json'
            },
            method: 'POST'
          })
          const data = await response.json()
          alert('Upload successful');
          console.log(data)
          setWords(data.words)
          setShowCamera(false)
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
        if (ratioIndex !== -1) {
          const ratio = ratios[ratioIndex]
          const parts = ratio.split(':');
          const aspectRatio = parseInt(parts[0]) / parseInt(parts[1]);

          setCameraRatio(ratio)
          setAspectRatio(aspectRatio)
        }
      }
    }
  }

  const solveNewGame = () => {
    setShowCamera(true)
  }

  const showWordsList = () => {
    setShowCamera(false)
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
          <SnapButton onClick={onSnap} />
          <View style={{ position: 'absolute', left: 10, bottom: 10 }}>
            <Button onPress={showWordsList} title='cancel' />
          </View>
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
      <WordsList words={words} solveNewGame={solveNewGame} />
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
