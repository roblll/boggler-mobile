import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
  onClick: () => void;
}

const Button: React.FC<Props> = ({ onClick }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onClick}
    >
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
