import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const CameraDisabled = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>PLEASE ALLOW CAMERA ACCESS TO USE THIS FEATURE.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
    margin: 24,
    maxWidth: 300,
  },
})

export default CameraDisabled;