import React from 'react';
import { View, Text, Button } from 'react-native';

type Props = {
  updateBoard: () => void;
}

const EditBoard: React.FC<Props> = ({ updateBoard }) => {
  return (
    <View>
      <Text>Edit Board</Text>
      <Button title='Cancel' onPress={() => updateBoard()} />
    </View>
  );
}

export default EditBoard;