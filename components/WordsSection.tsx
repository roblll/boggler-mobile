import React from 'react';
import { View, Text } from 'react-native';

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
    <View>
      <Text>{`${wordsLength} letter words`}</Text>
      {wordsList}
    </View>
  );
}

export default WordsSection;
