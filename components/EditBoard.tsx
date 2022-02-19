import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

import Button from './Button';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

type Props = {
  updateBoard: () => void;
  board: string[][];
}

const EditBoard: React.FC<Props> = ({ updateBoard, board }) => {
  return (
    <View style={styles.container}>
      <View style={styles.boardSection}>
        <View style={styles.board}>
          <View style={styles.row}>
            <TouchableOpacity style={styles.cell} onPress={() => alert('a')}>
              <Text style={styles.cellText}>{board[0][0].toUpperCase()}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} onPress={() => alert('a')}>
              <Text style={styles.cellText}>{board[0][1].toUpperCase()}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} onPress={() => alert('a')}>
              <Text style={styles.cellText}>{board[0][2].toUpperCase()}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} onPress={() => alert('a')}>
              <Text style={styles.cellText}>{board[0][3].toUpperCase()}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.cell} onPress={() => alert('a')}>
              <Text style={styles.cellText}>{board[1][0].toUpperCase()}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} onPress={() => alert('a')}>
              <Text style={styles.cellText}>{board[1][1].toUpperCase()}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} onPress={() => alert('a')}>
              <Text style={styles.cellText}>{board[1][2].toUpperCase()}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} onPress={() => alert('a')}>
              <Text style={styles.cellText}>{board[1][3].toUpperCase()}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
          <TouchableOpacity style={styles.cell} onPress={() => alert('a')}>
              <Text style={styles.cellText}>{board[2][0].toUpperCase()}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} onPress={() => alert('a')}>
              <Text style={styles.cellText}>{board[2][1].toUpperCase()}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} onPress={() => alert('a')}>
              <Text style={styles.cellText}>{board[2][2].toUpperCase()}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} onPress={() => alert('a')}>
              <Text style={styles.cellText}>{board[2][3].toUpperCase()}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
          <TouchableOpacity style={styles.cell} onPress={() => alert('a')}>
              <Text style={styles.cellText}>{board[3][0].toUpperCase()}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} onPress={() => alert('a')}>
              <Text style={styles.cellText}>{board[3][1].toUpperCase()}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} onPress={() => alert('a')}>
              <Text style={styles.cellText}>{board[3][2].toUpperCase()}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} onPress={() => alert('a')}>
              <Text style={styles.cellText}>{board[3][3].toUpperCase()}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomBorder} />
      </View>
      <View style={styles.confirmSection}>
        <Button onClick={updateBoard} size={WINDOW_WIDTH * .25} icon='check-bold' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: WINDOW_HEIGHT * .1,
    alignItems: 'center',
    backgroundColor: '#f4d456',
  },
  confirmSection: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: WINDOW_HEIGHT * .05,
  },
  boardSection: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  board: {
    width: WINDOW_WIDTH * .8,
    height: WINDOW_WIDTH * .8,
    backgroundColor: '#15343b',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
  },
  cell: {
    backgroundColor: 'white',
    width: WINDOW_WIDTH * .8 * .25 * .9,
    height: WINDOW_WIDTH * .8 * .25 * .9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBorder: {
    backgroundColor: '#15343b',
    height: WINDOW_WIDTH * .8 * .25 * .1,
    width: WINDOW_WIDTH * .8,
  },
  cellText: {
    fontSize: WINDOW_WIDTH * .8 * .25 * .60,
    color: "#15343b",
    fontWeight: "700",
  }
})

export default EditBoard;