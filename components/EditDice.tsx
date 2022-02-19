import React from 'react';
import { View, Text, Button } from 'react-native';

type Props = {
  close: () => void;
}

const EditDice: React.FC<Props> = ({ close }) => {
  return (
    <View>
      <Text>Edit dice</Text>
      <Button title='hide' onPress={() => close() }/>
    </View>
  );
}

export default EditDice;