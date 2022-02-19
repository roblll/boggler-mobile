import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import Button from './Button';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

type Props = {
  updateBoard: () => void;
}

const EditBoard: React.FC<Props> = ({ updateBoard }) => {
  return (
    <View style={styles.container}>
      <View style={styles.boardSection}>
        <Text>Edit Board</Text>
      </View>
      <View style={styles.confirmSection}>
        <Button onClick={updateBoard} size={WINDOW_WIDTH * .25} icon='check-bold' />
      </View>
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
  confirmSection: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: WINDOW_HEIGHT * .05,
  },
  boardSection: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  }
})

export default EditBoard;