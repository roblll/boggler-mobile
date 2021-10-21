import React from 'react';
import { TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;

type Props = {
  onClick: () => void;
}

const Button: React.FC<Props> = ({ onClick }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onClick}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#56d7f4',
    height: WINDOW_WIDTH * .25,
    width: WINDOW_WIDTH * .25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: WINDOW_WIDTH * .25,
    borderColor: 'white',
    borderWidth: WINDOW_WIDTH * .01,
  },
});

export default Button
