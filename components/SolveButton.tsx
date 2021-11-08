import React from 'react';
import { TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const WINDOW_WIDTH = Dimensions.get('window').width;

type Props = {
  onClick: () => void;
}

const SolveButton: React.FC<Props> = ({ onClick }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
      <MaterialCommunityIcons
        name="camera"
        size={WINDOW_WIDTH * .25 * .5}
        color={'white'}
      />
    </TouchableOpacity>
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
