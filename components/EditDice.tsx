import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import ScrollPicker from '../components/ScrollPicker';
import Button from './Button';
import { LETTERS } from '../utils/utils';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const contentHeight = height * .5;
const contentWidth = width * .4;
// const maxContentWidth = 300;
// const maxContentHeight = maxContentWidth * 1056 / 691;
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
  const [selected, setSelected] = useState<string>(letter)

  return (
    <View style={styles.container}>
      <View style={styles.bg} />
      <View style={styles.content}>
        <View style={styles.scrollSection}>
          <View style={styles.scrollContent}>
            <ScrollPicker
              dataSource={LETTERS}
              selectedIndex={LETTERS.indexOf(letter.toUpperCase())}
              renderItem={(data, index) => {
                return (
                  <Text style={styles.text}>{data}</Text>
                )
              }}
              onValueChange={(data, selectedIndex) => {
                setSelected(data.toString().toLowerCase())
              }}
              wrapperHeight={scrollPickerHeight}
              wrapperColor='#56d7f4'
              itemHeight={200 / 3}
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
    // maxWidth: maxContentWidth,
    // maxHeight: maxContentHeight,
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
    fontSize: width * .8 * .25 * .60,
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