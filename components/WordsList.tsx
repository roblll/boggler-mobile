import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import WordsSection from './WordsSection';
import Button from './Button';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

type Props = {
  words: WordsByLength;
  solveNewGame: () => void;
}

export type WordsByLength = {
  [key: string]: string[];
}

const WordsList: React.FC<Props> = ({ words, solveNewGame }) => {
  const getWordsByLength = () => {
    let wordsByLenghtSections = []
    for (let length in words) {
      wordsByLenghtSections.push(
        <View key={length}>
          <WordsSection words={words[length]} wordsLength={length} />
        </View>
      )
    }
    return wordsByLenghtSections;
  }

  return (
    <View style={styles.container}>
      <Text>{`${words.length}`} Words Found</Text>
      {getWordsByLength()}
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
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#f4d456',
    justifyContent: 'center',
    alignItems: 'center',
    padding: WINDOW_HEIGHT * .05,
  }
})

export default WordsList;
