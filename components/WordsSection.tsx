import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  wordsLength: string;
  words: string[];
}

const WordsSection: React.FC<Props> = ({ wordsLength, words }) => {
  let wordsList: JSX.Element[] = []
  words.forEach(word => {
    wordsList.push(<Text key={`${word}`}>{word}</Text>)
  })

  return (
    <View style={styles.container}>
      <Text>{`${wordsLength} letter words`}</Text>
      {wordsList}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
})

export default WordsSection;
