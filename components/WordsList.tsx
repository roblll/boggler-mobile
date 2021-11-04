import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import WordsSection from './WordsSection'

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
      <Text>Words List</Text>
      {getWordsByLength()}
      <Button title='Solve new game' onPress={solveNewGame} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default WordsList;
