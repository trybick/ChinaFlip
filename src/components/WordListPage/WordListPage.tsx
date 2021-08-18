import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useLocation } from 'react-router-native';
import { Button, Card, Icon } from 'react-native-elements';
import { getTitleForDisplay, WordListID, Word as WordType } from 'database/words/helper';
import { useCompletedWordsStorage, useIsFlippedStorage } from 'hooks/useCompletedWordsStorage';
import Header from 'components/Header/Header';
import WordRow from './WordRow';

type LocationState = { words: WordType[]; wordListID: WordListID };

const FlipIcon = () => (
  <>
    <Icon color="white" name="arrow-swap" size={16} style={styles.flipIcon} type="fontisto" />
  </>
);

export default function WordListPage() {
  const {
    state: { words, wordListID },
  } = useLocation<LocationState>();
  const { getIsCompleted, toggleCompletedWord } = useCompletedWordsStorage();
  const { isFlipped, isLoading, toggleIsFlipped } = useIsFlippedStorage();

  return (
    <View>
      <Header showBackButton={true} />
      <ScrollView>
        <View style={styles.pageContainer}>
          <Card containerStyle={styles.cardContainer}>
            <Card.Title style={styles.cardTitle}>{getTitleForDisplay(wordListID)}</Card.Title>
            <Card.Divider />
            <Button
              containerStyle={styles.flipButton}
              onPress={() => toggleIsFlipped()}
              title={<FlipIcon />}
            />

            {!isLoading &&
              words.map(word => (
                <WordRow
                  key={word.id}
                  isCompleted={getIsCompleted(word.id)}
                  isFlipped={isFlipped}
                  toggleCompletedWord={toggleCompletedWord}
                  word={word}
                />
              ))}
          </Card>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '30%',
  },
  cardContainer: {
    width: '100%',
  },
  cardTitle: {
    fontSize: 22,
  },
  flipButton: {
    alignSelf: 'flex-end',
    marginBottom: 10,
    width: 40,
  },
  flipIcon: {
    marginLeft: 2,
  },
});
