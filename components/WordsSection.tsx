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
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  wordText: {
    color: "white",
    fontFamily: "monospace",
  },
  wordsTitle: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontFamily: "monospace",
  }
})

export default WordsSection;
