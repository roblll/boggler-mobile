import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import Button from '../components/Button';

let WINDOW_WIDTH = Dimensions.get('window').width;
if (WINDOW_WIDTH > 450) {
  WINDOW_WIDTH = Dimensions.get('window').width * .7;
}

type Props = {
  showWordsList: () => void;
}

const CameraDisabled: React.FC<Props> = ({ showWordsList }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>PLEASE ALLOW CAMERA ACCESS TO USE THIS FEATURE.</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button onClick={() => showWordsList()} size={WINDOW_WIDTH * .25} icon='close'/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4d456',
  },
  textContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4d456',
  },
  text: {
    color: '#15343b',
    fontSize: 24,
    fontWeight: '700',
    margin: 24,
    maxWidth: 400,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  }
})

export default CameraDisabled;