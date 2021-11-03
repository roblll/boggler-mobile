import React from 'react';
import { View, Text, Button } from 'react-native';

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
        <Text key={length}>{length}</Text>
      )
    }
    return wordsByLenghtSections;
  }

  return (
    <View>
      <Text>Words List</Text>
      {words.map((word, index) => 
        <Text key={index}>{word}</Text>
      )}
      {getWordsByLength()}
      <Button title='Solve new game' onPress={solveNewGame} />
    </View>
  );
}

export default WordsList;
