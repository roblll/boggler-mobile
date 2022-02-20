import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Modal } from 'react-native';

import Button from './Button';
import EditDice from './EditDice';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

type Props = {
  updateBoard: () => void;
  board: string[][];
}

const EditBoard: React.FC<Props> = ({ updateBoard, board }) => {
  const [newBoard, setNewBoard] = useState<string[][]>(board);
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [letter, setLetter] = useState<string>("")
  const [diceLocation, setDiceLocation] = useState<number[]>([0,0])

  const showEditDice = (letter: string, location: number[]) => {
    setLetter(letter)
    setModalVisible(true)
  }

  const hideEditDice = (location: number[], letter: string) => {
    updateDice(location, letter)
    setModalVisible(false)
  }

  const updateDice = (location: number[], newLetter: string) => {
    const boardCopy: string[][] = []
    for (let i = 0; i < newBoard.length; i++) {
      boardCopy[i] = newBoard[i].slice()
    }
    const [row, col] = location
    boardCopy[row][col] = newLetter
    setNewBoard(boardCopy)
  }

  return (
    <View style={styles.container}>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType='fade'
      >
        <EditDice close={hideEditDice} letter={letter} />
      </Modal>
      <View style={styles.boardSection}>
        <View style={styles.board}>
          <View style={styles.row}>
            <TouchableOpacity style={styles.cell} onPress={() => showEditDice(newBoard[0][0], [0,0])}>
              <Text style={styles.cellText}>{newBoard[0][0].toUpperCase()}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} onPress={() => alert('a')}>
              <Text style={styles.cellText}>{newBoard[0][1].toUpperCase()}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} onPress={() => alert('a')}>
              <Text style={styles.cellText}>{newBoard[0][2].toUpperCase()}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} onPress={() => alert('a')}>
              <Text style={styles.cellText}>{newBoard[0][3].toUpperCase()}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.cell} onPress={() => alert('a')}>
              <Text style={styles.cellText}>{newBoard[1][0].toUpperCase()}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} onPress={() => alert('a')}>
              <Text style={styles.cellText}>{newBoard[1][1].toUpperCase()}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} onPress={() => alert('a')}>
              <Text style={styles.cellText}>{newBoard[1][2].toUpperCase()}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} onPress={() => alert('a')}>
              <Text style={styles.cellText}>{newBoard[1][3].toUpperCase()}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
          <TouchableOpacity style={styles.cell} onPress={() => alert('a')}>
              <Text style={styles.cellText}>{newBoard[2][0].toUpperCase()}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} onPress={() => alert('a')}>
              <Text style={styles.cellText}>{newBoard[2][1].toUpperCase()}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} onPress={() => alert('a')}>
              <Text style={styles.cellText}>{newBoard[2][2].toUpperCase()}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} onPress={() => alert('a')}>
              <Text style={styles.cellText}>{newBoard[2][3].toUpperCase()}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
          <TouchableOpacity style={styles.cell} onPress={() => alert('a')}>
              <Text style={styles.cellText}>{newBoard[3][0].toUpperCase()}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} onPress={() => alert('a')}>
              <Text style={styles.cellText}>{newBoard[3][1].toUpperCase()}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} onPress={() => alert('a')}>
              <Text style={styles.cellText}>{newBoard[3][2].toUpperCase()}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell} onPress={() => alert('a')}>
              <Text style={styles.cellText}>{newBoard[3][3].toUpperCase()}</Text>
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