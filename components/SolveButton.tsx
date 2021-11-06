import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SolveButton = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="camera"
        size={50}
        color={'white'}
      />
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
