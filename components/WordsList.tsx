import React from 'react';
import { View, Text } from 'react-native';

type Props = {
  words: string[];
}

const WordsList: React.FC<Props> = ({ words }) => {
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
