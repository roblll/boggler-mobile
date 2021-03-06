import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import ScrollPicker from '../components/ScrollPicker';
import Button from './Button';
import { LETTERS } from '../utils/utils';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const contentHeight = height * .5;
const contentWidth = width * .4;
let scrollPickerWidth = contentWidth * .5;
const scrollPickerHeight = contentHeight * .5;
if (scrollPickerWidth * 2 > 300) {
  scrollPickerWidth = 300 * 6 / 15;
}

type Props = {
  close: (letter: string) => void;
  letter: string;
}

const EditDice: React.FC<Props> = ({ close, letter }) => {
  let selectedLetter = letter.toUpperCase();
  if (selectedLetter == 'Q') {
    selectedLetter = 'Qu';
  }
  const [selected, setSelected] = useState<string>(letter)

  return (
    <View style={styles.container}>
      <View style={styles.bg} />
      <View style={styles.content}>
        <View style={styles.scrollSection}>
          <View style={styles.scrollContent}>
            <ScrollPicker
              dataSource={LETTERS}
              selectedIndex={LETTERS.indexOf(selectedLetter)}
              renderItem={(data, index) => {
                return (
                  <Text style={styles.text}>{data}</Text>
                )
              }}
              onValueChange={(data, selectedIndex) => {
                let letter = data.toString().toLowerCase()
                if (letter === 'qu') {
                  letter = 'q'
                }
                setSelected(letter)
              }}
              wrapperHeight={scrollPickerHeight}
              wrapperColor='#56d7f4'
              itemHeight={scrollPickerHeight / 3}
              highlightColor='#fff'
            />
          </View>
        </View>
        <View style={styles.buttonSection}>
          <Button onClick={() => close(selected)} size={width * .8 * .25 * .60} icon='autorenew' />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    position: 'absolute',
    height: contentHeight,
    width: contentWidth,
    backgroundColor: '#56d7f4',
    borderColor: '#fff',
    borderWidth: 7,
  },
  bg: {
    flex: 1,
    backgroundColor: '#000',
    opacity: .25,
    height: height,
    width: width,
  },
  text: {
    fontSize: scrollPickerHeight * .8 * .3,
    color: '#15343b',
    fontWeight: "700",
  },
  buttonSection: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  scrollSection: {
    flex: 2, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  scrollContent: {
    height: scrollPickerHeight,
    width: scrollPickerWidth,
  },
})

export default EditDice;