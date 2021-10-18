import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>SOLVE</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Button
