import React from 'react';
import { View, Text } from 'react-native';

type Props = {
  words: string[];
}

const WordsSection: React.FC<Props> = ({ words }) => {
  let wordsList: JSX.Element[] = []
  words.forEach(word => {
    wordsList.push(<Text key={`${word}`}>{word}</Text>)
  })
  
  return (
    <View>
      <Text>Words Section</Text>
      {wordsList}
    </View>
  );
}

export default WordsSection;
