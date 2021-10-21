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
      <Text style={styles.buttonText}>SOLVE</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#56d7f4',
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 4,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  }
});

export default Button
