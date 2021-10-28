import React from 'react';
import { View, Text } from 'react-native';

type Props = {
  words: string[];
}

const WordsList: React.FC<Props> = ({ words }) => {
  const getWordsByLength = () => {
    let wordsByLength = {}
    words.forEach(word => {
      console.log(word)
    })
  }

  getWordsByLength()

  return (
    <View>
      <Text>Words List</Text>
      {words.map((word, index) => 
        <Text key={index}>{word}</Text>
      )}
    </View>
  );
}

export default WordsList;
