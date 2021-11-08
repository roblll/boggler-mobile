import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;

type Props = {
  wordsLength: string;
  words: string[];
}

const WordsSection: React.FC<Props> = ({ wordsLength, words }) => {
  let wordsList: JSX.Element[] = []
  words.forEach(word => {
    wordsList.push(<Text key={`${word}`}>• {word}</Text>)
  })

  return (
    <View style={styles.container}>
      <Text>{`${wordsLength} letters (${words.length})`}</Text>
      {wordsList}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: WINDOW_WIDTH,
    paddingHorizontal: WINDOW_WIDTH * .1,
    paddingVertical: WINDOW_WIDTH * .025,
  }
})

export default WordsSection;
