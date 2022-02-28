import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import * as Updates from "expo-updates";

const Restart = () => {
  const [updateDownloaded, setUpdateDownloaded] = useState<boolean>(false);

  useEffect(() => {
    getUpdate();
  }, []);

  const getUpdate = async () => {
    if (!__DEV__) {
      await Updates.fetchUpdateAsync();
      setTimeout(() => {
        restart()
      }, 2000)
      setUpdateDownloaded(true)
    }
  };

  const restart = async () => {
    if (!__DEV__) {
      await Updates.reloadAsync();
    }
  };

  const message = updateDownloaded ? 'RESTARTING' : 'DOWNLOADING UPDATE'

  return (
    <View style={styles.container}>
      <Image style={styles.loadingGif} source={require('../assets/loading.gif')} />
        <Text style={styles.text}>{message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4d456',
  },
  text: {
    color: '#15343b',
    fontSize: 24,
    fontWeight: '700',
    margin: 24,
  },
  loadingGif: {
    width: 100,
    height: 100,
  }
})

export default Restart;