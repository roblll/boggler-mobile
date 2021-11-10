import React from 'react';
import { TouchableOpacity, Dimensions } from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;

type Props = {
  onClick: () => void;
  size: number;
}

const Button: React.FC<Props> = ({ onClick, size }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#56d7f4',
        height: size,
        width: size,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: size,
        borderColor: 'white',
        borderWidth: size * .05,
      }}
      onPress={onClick}
    />
  );
}

export default Button
