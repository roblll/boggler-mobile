import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  board: string[][];
}

const Board: React.FC<Props> = ({board}) => {
  let row1: JSX.Element[] = []
  board[0].forEach((letter, index) => {
    row1.push(<View key={index} style={styles.cell}><Text>{letter.toUpperCase()}</Text></View>)
  });
  let row2: JSX.Element[] = []
  board[1].forEach((letter, index) => {
    row2.push(<View key={index} style={styles.cell}><Text>{letter.toUpperCase()}</Text></View>)
  });
  let row3: JSX.Element[] = []
  board[2].forEach((letter, index) => {
    row3.push(<View key={index} style={styles.cell}><Text>{letter.toUpperCase()}</Text></View>)
  });
  let row4: JSX.Element[] = []
  board[3].forEach((letter, index) => {
    row4.push(<View key={index} style={styles.cell}><Text>{letter.toUpperCase()}</Text></View>)
  });

  return (
    <View style={styles.container}>
      <View style={styles.row}>{row1}</View>
      <View style={styles.row}>{row2}</View>
      <View style={styles.row}>{row3}</View>
      <View style={styles.row}>{row4}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "black",
  },
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