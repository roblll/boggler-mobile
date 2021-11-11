import React from 'react';
import { TouchableOpacity, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const WINDOW_WIDTH = Dimensions.get('window').width;

type Props = {
  onClick: () => void;
  size: number;
  icon?: keyof typeof MaterialCommunityIcons.glyphMap;
}

const Button: React.FC<Props> = ({ onClick, size, icon }) => {
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
    >
      {icon &&
        <MaterialCommunityIcons
          name={icon}
          size={size * .5}
          color={'white'}
        />
      }
    </TouchableOpacity>
  );
}

export default Button
