import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';

import WordsSection from './WordsSection';
import Button from './Button';
import Board from './Board';
import EditBoard from './EditBoard';

let WINDOW_WIDTH = Dimensions.get('window').width;
if (WINDOW_WIDTH > 450) {
  WINDOW_WIDTH = Dimensions.get('window').width * .7;
}
const WINDOW_HEIGHT = Dimensions.get('window').height;

type Props = {
  words: WordsByLength;
  count: string;
  board: string[][];
  solveNewGame: () => void;
  updateWords: (newBoard: string[][]) => void;
}

export type WordsByLength = {
  [key: string]: string[];
}

const WordsList: React.FC<Props> = ({ words, count, board, solveNewGame, updateWords }) => {
  const [boardVisible, setBoardVisible] = useState<boolean>(false);

  const getWordsByLength = () => {
    let wordsByLenghtSections = []
    for (let length in words) {
      wordsByLenghtSections.push(
        <View key={length}>
          <WordsSection words={words[length]} wordsLength={length} />
        </View>
      )
    }
    return (
      <View>
        {wordsByLenghtSections}
      </View>
    );
  }

  const updateBoard = (newBoard: string[][]) => {
    setBoardVisible(false)
    updateWords(newBoard)
  }

  if (boardVisible) {
    return (
      <EditBoard updateBoard={updateBoard} board={board} />
    )
  } else {
    return (
      <View style={styles.outer}>
        <View style={styles.container}>
          <View style={styles.headerSection}>
            <View style={styles.foundContainer}>
              <Text style={styles.foundNumber}>{`${count}`}</Text>
              <Text style={styles.foundText}>WORDS</Text>
            </View>
            <TouchableOpacity onPress={() => setBoardVisible(true)}>
              <Board board={board}/>
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.wordsList} showsVerticalScrollIndicator={false}>
            {getWordsByLength()}
          </ScrollView>
          <View style={styles.solveSection}>
            <Button onClick={solveNewGame} size={WINDOW_WIDTH * .25} icon='camera' />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    backgroundColor: '#f4d456',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    paddingTop: WINDOW_HEIGHT * .1,
    alignItems: 'center',
    backgroundColor: '#f4d456',
    width: WINDOW_WIDTH,
  },
  solveSection: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: WINDOW_HEIGHT * .05,
  },
  headerSection: {
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: WINDOW_HEIGHT * .05,
    flexDirection: 'row',
  },
  wordsList: {
    backgroundColor: "#173a42",
    width: "80%",
    borderColor: "#15343b",
    borderWidth: 6,
  },
  foundText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
    width: "100%",
    textAlign: "center",
  },
  foundNumber: {
    color: "white",
    fontSize: 23,
    fontWeight: "700",
    width: "100%",
    textAlign: "center",
  },
  foundContainer: {
    backgroundColor: "#56d7f4",
    width: 92,
    height: 92,
    borderWidth: 2,
    borderColor: "#15343b",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  }
})

export default WordsList;
