import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  board: string[][];
}

const Board: React.FC<Props> = ({board}) => {
  let row1: JSX.Element[] = []
  board[0].forEach(letter => {
    row1.push(<View style={styles.cell}><Text>{letter}</Text></View>)
  });
  let row2: JSX.Element[] = []
  board[1].forEach(letter => {
    row2.push(<View style={styles.cell}><Text>{letter}</Text></View>)
  });
  let row3: JSX.Element[] = []
  board[2].forEach(letter => {
    row3.push(<View style={styles.cell}><Text>{letter}</Text></View>)
  });
  let row4: JSX.Element[] = []
  board[3].forEach(letter => {
    row4.push(<View style={styles.cell}><Text>{letter}</Text></View>)
  });

  return (
    <View>
      <View style={styles.row}>{row1}</View>
      <View style={styles.row}>{row2}</View>
      <View style={styles.row}>{row2}</View>
      <View style={styles.row}>{row2}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row"
  },
  cell: {
    borderWidth: 1,
    borderColor: "black",
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  }
})

export default Board;