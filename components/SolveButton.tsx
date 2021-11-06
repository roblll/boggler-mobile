import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const WINDOW_WIDTH = Dimensions.get('window').width;

const SolveButton = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="camera"
        size={WINDOW_WIDTH * .25 * .5}
        color={'white'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#56d7f4',
    height: WINDOW_WIDTH * .25,
    width: WINDOW_WIDTH * .25,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: WINDOW_WIDTH * .25 * .25,
    borderColor: 'white',
    borderWidth: WINDOW_WIDTH * .25 * .05,
    borderRadius: WINDOW_WIDTH,
  },
  buttonText: {
    color: '#000',
  },
})

export default SolveButton;
