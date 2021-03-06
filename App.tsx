import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from 'react';
import { View, Dimensions, Platform, Image, StyleSheet } from 'react-native';
import { Camera, Constants } from 'expo-camera';
import { manipulateAsync, SaveFormat } from 'expo-image-manipulator';
import * as Updates from "expo-updates";

import { getURI, buildTrie, findWords } from './utils/utils';

import Button from './components/Button';
import WordsList, { WordsByLength } from './components/WordsList';
import Loading from './components/Loading';
import Restart from './components/Restart';
import CameraDisabled from './components/CameraDisabled';

let WINDOW_WIDTH = Dimensions.get('window').width;
if (WINDOW_WIDTH > 450) {
  WINDOW_WIDTH = Dimensions.get('window').width * .7;
}

const TRIE = buildTrie();

const App = () => {
  const cameraRef = useRef<Camera | null>();
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [cameraRatio, setCameraRatio] = useState("");
  const [aspectRatio, setAspectRatio] = useState(1.333);
  const [showCamera, setShowCamera] = useState<boolean>(true);
  const [flashOn, setFlashOn] = useState<boolean>(false);
  const [words, setWords] = useState<WordsByLength>({});
  const [count, setCount] = useState<string>("0");
  const [board, setBoard] = useState([["a", "a", "a", "a"], ["a", "a", "a", "a"], ["a", "a", "a", "a"], ["a", "a", "a", "a"]]);
  const [loading, setLoading] = useState<boolean>(false);
  const [showRestart, setShowRestart] = useState<boolean>(false);
  const [showCameraMessage, setShowCameraMessage] = useState<boolean>(false);

  useEffect(() => {
    onHandlePermission();
    checkForUpdates()
  }, []);

  const onHandlePermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  const checkForUpdates = async () => {
    if (!__DEV__) {
      try {
        const { isAvailable } = await Updates.checkForUpdateAsync();
        setShowRestart(isAvailable);
      } catch (e) {}
    }
  }

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
          setLoading(true)
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
          const { board } = await response.json()
          await loadPictureBoard(board)
          setLoading(false)
        }
      } catch (err) {
        setLoading(false)
      }
    }
  }

  const loadPictureBoard = async (board: string[][]) => {
    const {foundWords, count} = findWords(TRIE, board);
    setWords(foundWords)
    setCount(count)
    setBoard(board)
    setShowCamera(false)
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
    setShowCameraMessage(false)
    setShowCamera(true)
  }

  const showWordsList = () => {
    setShowCamera(false)
  }

  const toggleFlash = () => {
    if (flashOn) {
      setFlashOn(false)
    } else {
      setFlashOn(true)
    }
  }

  const updateWords = (newBoard: string[][]) => {
    setLoading(true)
    setTimeout(() => {
      setBoard(newBoard)
      const {foundWords, count} = findWords(TRIE, newBoard);
      setWords(foundWords)
      setCount(count)
      setLoading(false)
    }, 1500);
  }

  if (showRestart) {
    return <Restart />
  }

  if (loading) {
    return (
      <Loading />
    );
  }

  if (showCamera) {
    return (
      <View style={styles.outer}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          {hasPermission && 
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
              flashMode={flashOn ? Camera.Constants.FlashMode.on : Camera.Constants.FlashMode.off}
            />
          }
          {!hasPermission && !showCameraMessage &&
            <View style={{
              height: WINDOW_WIDTH * aspectRatio,
              width: WINDOW_WIDTH,
              backgroundColor: 'black',
            }} />
          }
          {!hasPermission && showCameraMessage &&
            <View style={{
              height: WINDOW_WIDTH * aspectRatio,
              width: WINDOW_WIDTH,
              backgroundColor: 'black',
            }}>
              <CameraDisabled />
            </View>
          }
          <View style={styles.buttonContainer}>
            <Button 
              onClick={toggleFlash} 
              size={WINDOW_WIDTH * .25 * .5} 
              icon={flashOn ? 'flash' : 'flash-off'}
            />
            {hasPermission && 
              <Button onClick={onSnap} size={WINDOW_WIDTH * .25} />
            }
            {!hasPermission && 
              <Button onClick={() => setShowCameraMessage(true)} size={WINDOW_WIDTH * .25} />
            }
            <Button onClick={showWordsList} size={WINDOW_WIDTH * .25 * .5} icon='close' />
          </View>
          {!showCameraMessage &&
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
          }
        </View>
      </View>
    );
  } else {
    return (
      <WordsList words={words} count={count} board={board} solveNewGame={solveNewGame} updateWords={updateWords} />
    )
  }
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    backgroundColor: '#15343b',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#f4d456',
    width: WINDOW_WIDTH,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  }
});

export default App
