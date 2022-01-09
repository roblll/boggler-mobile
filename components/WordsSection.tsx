import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  useFonts,
  CourierPrime_700Bold,
} from '@expo-google-fonts/courier-prime';

type Props = {
  wordsLength: string;
  words: string[];
}

const WordsSection: React.FC<Props> = ({ wordsLength, words }) => {
  let [fontsLoaded] = useFonts({
    CourierPrime_700Bold,
  });
  
  let allWords: string = ""
  words.forEach(word => {
    allWords = allWords + `${word.toUpperCase()}  `
  })

  if (!fontsLoaded) {
    return <View></View>;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.wordsTitle}>{`${wordsLength} LETTERS (${words.length})`}</Text>
        <Text style={styles.wordText}>{allWords}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  wordText: {
    color: 'white',
    fontFamily: 'CourierPrime_700Bold',
  },
  wordsTitle: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'CourierPrime_700Bold',
  }
})

export default WordsSection;
