import React from 'react';
import { View, Text, StyleSheet, ColorPropType } from 'react-native';

type Props = {
  board: string[][];
}

const Board: React.FC<Props> = ({ board }) => {
  const copy: string[][] = []
  for (let i = 0; i < board.length; i++) {
    copy.push([])
    for (let j = 0; j < board[0].length; j++) {
      copy[i][j] = board[i][j].toUpperCase()
      if (copy[i][j] === 'Q') {
        copy[i][j] = 'Qu'
      }
    }
  }

  let row1: JSX.Element[] = []
  copy[0].forEach((letter, index) => {
    row1.push(<View key={index} style={styles.cell}><Text style={styles.letter}>{letter}</Text></View>)
  });
  let row2: JSX.Element[] = []
  copy[1].forEach((letter, index) => {
    row2.push(<View key={index} style={styles.cell}><Text style={styles.letter}>{letter}</Text></View>)
  });
  let row3: JSX.Element[] = []
  copy[2].forEach((letter, index) => {
    row3.push(<View key={index} style={styles.cell}><Text style={styles.letter}>{letter}</Text></View>)
  });
  let row4: JSX.Element[] = []
  copy[3].forEach((letter, index) => {
    row4.push(<View key={index} style={styles.cell}><Text style={styles.letter}>{letter}</Text></View>)
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
    borderColor: "#15343b",
  },
  row: {
    flexDirection: "row",
    backgroundColor: "white",
  },
  cell: {
    borderWidth: 1,
    borderColor: "#15343b",
    width: 23,
    height: 23,
    justifyContent: "center",
    alignItems: "center",
  },
  letter: {
    color: "#15343b",
    fontWeight: "700",
  }
})

export default Board;