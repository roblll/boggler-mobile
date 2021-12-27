import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  board: string[][];
}

const Board: React.FC<Props> = ({board}) => {
  let row1: JSX.Element[] = []
  board[0].forEach(letter => {
    row1.push(<Text>{letter}</Text>)
  });
  let row2: JSX.Element[] = []
  board[1].forEach(letter => {
    row2.push(<Text>{letter}</Text>)
  });
  let row3: JSX.Element[] = []
  board[2].forEach(letter => {
    row3.push(<Text>{letter}</Text>)
  });
  let row4: JSX.Element[] = []
  board[3].forEach(letter => {
    row4.push(<Text>{letter}</Text>)
  });

  return (
    <View>
      <View>{row1}</View>
      <View>{row2}</View>
      <View>{row2}</View>
      <View>{row2}</View>
    </View>
  );
}

export default Board;