import React from 'react';
import { StyleSheet, View } from 'react-native';
import WORDS from 'database/words';
import { WordListID } from 'database/helper';
import Header from '../Header/Header';
import WordListButton from './WordListButton';

export default function HomePage() {
  return (
    <View>
      <Header />
      <View style={styles.pageContainer}>
        {Object.entries(WORDS).map(([wordListID, words]) => (
          <WordListButton key={wordListID} wordListID={wordListID as WordListID} words={words} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
