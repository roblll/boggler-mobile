import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Button() {
  return (
    <View style={styles.container}></View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    height: 100,
    width: 100,
  },
});