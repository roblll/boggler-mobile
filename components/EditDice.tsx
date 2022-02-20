import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';

import ScrollPicker from '../components/ScrollPicker';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const contentWidth = width * .55;
const contentHeight = contentWidth * 1056 / 691;
const maxContentWidth = 300;
const maxContentHeight = maxContentWidth * 1056 / 691;
let scrollPickerWidth = contentWidth * 6 / 15;
const scrollPickerHeight = Dimensions.get('window').height / 6 * .75;
if (scrollPickerWidth * 2 > 300) {
  scrollPickerWidth = 300 * 6 / 15;
}

type Props = {
  close: (letter: string) => void;
  letter: string;
}

const EditDice: React.FC<Props> = ({ close, letter }) => {
  return (
    <View style={styles.container}>
      <View style={styles.bg} />
      <View style={styles.content}>
        <View style={{height: 200, width: 100}}>
          <ScrollPicker
            dataSource={['A', 'B', 'C', 'D', 'E', 'F']}
            selectedIndex={0}
            renderItem={(data, index) => {
              return (
                <Text style={styles.text}>{data}</Text>
              )
            }}
            // onValueChange={(data, selectedIndex) => {
            //   setMinRank(selectedIndex)
            // }}
            wrapperHeight={200}
            wrapperColor='#56d7f4'
            itemHeight={200 / 3}
            highlightColor='#fff'
          />
        </View>
        <Button title='OK' onPress={() => close('a') }/>
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
    maxWidth: maxContentWidth,
    maxHeight: maxContentHeight,
    backgroundColor: '#56d7f4',
    borderColor: '#fff',
    borderWidth: 5,
    justifyContent: 'center',
    alignItems: 'center'
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
    color: "#15343b",
    fontWeight: "700",
  }
})

export default EditDice;