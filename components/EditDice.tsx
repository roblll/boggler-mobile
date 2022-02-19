import React from 'react';
import { View, Text, Button } from 'react-native';

type Props = {
  close: () => void;
  letter: string;
}

const EditDice: React.FC<Props> = ({ close, letter }) => {
  return (
    <View>
      <Text>{letter}</Text>
      <Button title='hide' onPress={() => close() }/>
    </View>
  );
}

export default EditDice;