import React from 'react';
import { View, Text } from 'react-native';

type Props = {
  words: string[];
}

type WordsByLength = {
  [key: string]: string[];
}

const WordsList: React.FC<Props> = ({ words }) => {
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
    console.log(wordsByLength)
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
