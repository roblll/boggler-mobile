import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SolveButton = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.buttonText}>SOLVE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#56d7f4',
    padding: 10,
    borderColor: 'white',
    borderWidth: 100 * .01,
  },
  buttonText: {
    color: '#000',
  },
})

export default SolveButton;
