import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import WordLibrary from 'database/words/WordLibrary';
import { WordListID } from 'utils/wordsHelper';
import { useBackButtonHandler } from 'hooks/useBackButtonHandler';
import Header from '../Header/Header';
import WordListButton from './WordListButton';

export default function HomePage() {
  useBackButtonHandler();

  return (
    <ScrollView>
      <Header pageTitle="Word Categories" />
      <View style={styles.pageContainer}>
        {Object.entries(WordLibrary).map(([wordListID, words]) => (
          <WordListButton key={wordListID} wordListID={wordListID as WordListID} words={words} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 40,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
