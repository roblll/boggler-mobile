import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  board: string[][];
}

const Board: React.FC<Props> = ({board}) => {
  return (
    <View>
      <Text>{board[0].join(" | ")}</Text>
      <Text>{board[1].join(" | ")}</Text>
      <Text>{board[2].join(" | ")}</Text>
      <Text>{board[3].join(" | ")}</Text>
    </View>
  );
}

export default Board;