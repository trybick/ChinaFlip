import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useLocation } from 'react-router-native';
import { Button, Card, Icon, Switch, Text } from 'react-native-elements';
import { getTitleForDisplay, WordListID, Word as WordType } from 'utils/wordsHelper';
import {
  useCompletedWordsStorage,
  useIsFlippedStorage,
  useIsTranslationHiddenStorage,
} from 'hooks/useStorage';
import Header from 'components/Header/Header';
import WordRow from './WordRow';

type LocationState = { words: WordType[]; wordListID: WordListID };

const FlipIcon = () => (
  <Icon color="white" name="arrow-swap" size={12} style={styles.flipIcon} type="fontisto" />
);

export default function WordListPage() {
  const {
    state: { words, wordListID },
  } = useLocation<LocationState>();
  const { getIsCompleted, toggleCompletedWord } = useCompletedWordsStorage();
  const { isFlipped, isLoadingIsFlipped, toggleIsFlipped } = useIsFlippedStorage();
  const { isLoadingTranslationHidden, isTranslationHidden, toggleIsTranslationHidden } =
    useIsTranslationHiddenStorage();

  return (
    <View>
      <Header showBackButton />
      <ScrollView>
        <View style={styles.pageContainer}>
          <Card containerStyle={styles.cardContainer}>
            <Card.Title style={styles.cardTitle}>{getTitleForDisplay(wordListID)}</Card.Title>
            <Card.Divider />

            <View style={styles.buttonsWrapper}>
              <View style={styles.hideTranslationContainer}>
                <Switch
                  onValueChange={toggleIsTranslationHidden}
                  style={styles.switch}
                  value={isTranslationHidden}
                />
                <Text onPress={toggleIsTranslationHidden} style={styles.hideTranslationText}>
                  Hide Translation
                </Text>
              </View>
              <Button
                buttonStyle={styles.flipButtonButton}
                containerStyle={styles.flipButtonContainer}
                icon={<FlipIcon />}
                onPress={toggleIsFlipped}
                title={<Text style={styles.flipText}>Flip</Text>}
              />
            </View>

            <Card.Divider />
            <View style={styles.wordsContainer}>
              {!isLoadingIsFlipped &&
                !isLoadingTranslationHidden &&
                words.map(word => (
                  <WordRow
                    key={word.id}
                    isCompleted={getIsCompleted(word.id)}
                    isFlipped={isFlipped}
                    isTranslationHidden={isTranslationHidden}
                    toggleCompletedWord={toggleCompletedWord}
                    word={word}
                  />
                ))}
            </View>
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
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  hideTranslationContainer: {
    flexDirection: 'row',
  },
  hideTranslationText: {
    alignSelf: 'center',
    fontSize: 13,
  },
  switch: {
    transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }],
  },
  flipButtonContainer: {
    marginRight: 4,
  },
  flipButtonButton: {
    backgroundColor: '#2196f3',
    height: 32,
    width: 64,
  },
  flipIcon: {
    marginRight: 3,
  },
  flipText: {
    color: '#fff',
  },
  wordsContainer: {
    paddingLeft: 3,
    paddingRight: 6,
  },
});
