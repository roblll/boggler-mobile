import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';

import WordsSection from './WordsSection';
import Button from './Button';
import Board from './Board';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

type Props = {
  words: WordsByLength;
  count: string;
  board: string[][];
  solveNewGame: () => void;
}

export type WordsByLength = {
  [key: string]: string[];
}

const WordsList: React.FC<Props> = ({ words, count, board, solveNewGame }) => {
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

  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <Text>{`${count}`} Words Found</Text>
        <Board board={board}/>
      </View>
      <ScrollView style={styles.wordsList} showsVerticalScrollIndicator={false}>
        {getWordsByLength()}
      </ScrollView>
      <View style={styles.solveSection}>
        <Button onClick={solveNewGame} size={WINDOW_WIDTH * .25} icon='camera' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: WINDOW_HEIGHT * .1,
    alignItems: 'center',
  },
  solveSection: {
    width: '100%',
    backgroundColor: '#f4d456',
    justifyContent: 'center',
    alignItems: 'center',
    padding: WINDOW_HEIGHT * .05,
  },
  headerSection: {
    width: '100%',
    backgroundColor: '#f4d456',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: WINDOW_HEIGHT * .05,
    flexDirection: 'row',
  },
  wordsList: {
    backgroundColor: "#56d7f4",
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: "white",
  },
})

export default WordsList;
