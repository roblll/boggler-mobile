import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Loading = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.loadingGif} source={require('../assets/loading.gif')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4d456',
  },
  loadingGif: {
    width: 100,
    height: 100,
  }
})

export default Loading;
