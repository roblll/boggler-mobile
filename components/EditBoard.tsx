import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Modal } from 'react-native';

import Button from './Button';
import EditDice from './EditDice';

let WINDOW_WIDTH = Dimensions.get('window').width;
if (WINDOW_WIDTH > 450) {
  WINDOW_WIDTH = Dimensions.get('window').width * .7;
}
const WINDOW_HEIGHT = Dimensions.get('window').height;

type Props = {
  updateBoard: (newBoard: string[][]) => void;
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
    setDiceLocation(location)
  }

  const hideEditDice = (letter: string) => {
    updateDice(letter)
    setModalVisible(false)
  }

  const updateDice = (newLetter: string) => {
    const boardCopy: string[][] = []
    for (let i = 0; i < newBoard.length; i++) {
      boardCopy[i] = newBoard[i].slice()
    }
    const [row, col] = diceLocation
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
            {newBoard[0].map((letter, index) => {
              let letterDisplay = letter.toUpperCase()
              if (letterDisplay === 'Q') {
                letterDisplay = 'Qu'
              }
              return (
                <TouchableOpacity 
                  style={styles.cell} 
                  onPress={() => showEditDice(letter, [0, index])}
                  key={index}
                >
                  <Text style={styles.cellText}>{letterDisplay}</Text>
                </TouchableOpacity>
              )
            })}
          </View>
          <View style={styles.row}>
            {newBoard[1].map((letter, index) => {
              let letterDisplay = letter.toUpperCase()
              if (letterDisplay === 'Q') {
                letterDisplay = 'Qu'
              }
              return (
                <TouchableOpacity 
                  style={styles.cell} 
                  onPress={() => showEditDice(letter, [1, index])}
                  key={index}
                >
                  <Text style={styles.cellText}>{letterDisplay}</Text>
                </TouchableOpacity>
              )
            })}
          </View>
          <View style={styles.row}>
            {newBoard[2].map((letter, index) => {
              let letterDisplay = letter.toUpperCase()
              if (letterDisplay === 'Q') {
                letterDisplay = 'Qu'
              }
              return (
                <TouchableOpacity 
                  style={styles.cell} 
                  onPress={() => showEditDice(letter, [2, index])}
                  key={index}
                >
                  <Text style={styles.cellText}>{letterDisplay}</Text>
                </TouchableOpacity>
              )
            })}
          </View>
          <View style={styles.row}>
            {newBoard[3].map((letter, index) => {
              let letterDisplay = letter.toUpperCase()
              if (letterDisplay === 'Q') {
                letterDisplay = 'Qu'
              }
              return (
                <TouchableOpacity 
                  style={styles.cell} 
                  onPress={() => showEditDice(letter, [3, index])}
                  key={index}
                >
                  <Text style={styles.cellText}>{letterDisplay}</Text>
                </TouchableOpacity>
              )
            })}
          </View>
        </View>
        <View style={styles.bottomBorder} />
      </View>
      <View style={styles.confirmSection}>
        <Button onClick={() => updateBoard(newBoard)} size={WINDOW_WIDTH * .25} icon='check-bold' />
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