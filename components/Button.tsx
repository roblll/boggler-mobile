import React from 'react';
import { View, StyleSheet } from 'react-native';

const Button = () => {
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

export default Button
