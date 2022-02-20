import React from 'react';
import { View, Text, Button } from 'react-native';

type Props = {
  close: (location: number[], letter: string) => void;
  letter: string;
}

const EditDice: React.FC<Props> = ({ close, letter }) => {
  return (
    <View>
      <Text>{letter}</Text>
      <Button title='hide' onPress={() => close([0,0], 'a') }/>
    </View>
  );
}

export default EditDice;