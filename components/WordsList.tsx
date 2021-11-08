import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import WordsSection from './WordsSection';
import SolveButton from './SolveButton';

type Props = {
  words: string[];
  solveNewGame: () => void;
}

type WordsByLength = {
  [key: string]: string[];
}

const WordsList: React.FC<Props> = ({ words, solveNewGame }) => {
  const getWordsByLength = () => {
    let wordsByLength: WordsByLength = {}
    words.forEach(word => {
      let lengthKey = word.length.toString();
      if (lengthKey in wordsByLength) {
        wordsByLength[lengthKey].push(word)
      } else {
        wordsByLength[lengthKey] = []
        wordsByLength[lengthKey].push(word)
      }
    })
    let wordsByLenghtSections = []
    for (let length in wordsByLength) {
      wordsByLenghtSections.push(
        <View key={length}>
          <WordsSection words={wordsByLength[length]} wordsLength={length} />
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
        <SolveButton onClick={solveNewGame} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  solveSection: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#f4d456',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default WordsList;
