import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

type Props = {
  wordsLength: string;
  words: string[];
}

const WordsSection: React.FC<Props> = ({ wordsLength, words }) => {
  let allWords: string = ""
  words.forEach(word => {
    allWords = allWords + `${word.toUpperCase()}  `
  })

  return (
    <View style={styles.container}>
      <Text style={styles.wordsTitle}>{`${wordsLength} LETTERS (${words.length})`}</Text>
      <Text style={styles.wordText}>{allWords}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  wordText: {
    color: "white",
  },
  wordsTitle: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  }
})

export default WordsSection;
