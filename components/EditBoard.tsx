import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';

const WINDOW_HEIGHT = Dimensions.get('window').height;

type Props = {
  updateBoard: () => void;
}

const EditBoard: React.FC<Props> = ({ updateBoard }) => {
  return (
    <View style={styles.container}>
      <Text>Edit Board</Text>
      <Button title='Cancel' onPress={() => updateBoard()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: WINDOW_HEIGHT * .1,
    alignItems: 'center',
    backgroundColor: '#f4d456',
  },
})

export default EditBoard;