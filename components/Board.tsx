import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  board: string[][];
}

const Board: React.FC<Props> = ({board}) => {
  return (
    <View>
      <Text>Board</Text>
    </View>
  );
}

export default Board;