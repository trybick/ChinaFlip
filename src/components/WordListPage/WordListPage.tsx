import React from 'react';
import { Platform, ScrollView, StyleSheet, View } from 'react-native';
import { useLocation } from 'react-router-native';
import { Button, Icon, Switch, Text } from 'react-native-elements';
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
    <>
      <Header pageTitle={getTitleForDisplay(wordListID)} showBackButton />

      <ScrollView>
        <View style={styles.pageContainer}>
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
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '30%',
    paddingHorizontal: 8,
  },
  buttonsWrapper: {
    width: '100%',
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: -8, // compensate for first WordRow
  },
  hideTranslationContainer: {
    flexDirection: 'row',
  },
  hideTranslationText: {
    alignSelf: 'center',
    fontSize: Platform.OS === 'ios' ? 13 : 15,
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
    marginRight: 6,
  },
  flipText: {
    color: '#fff',
  },
  wordsContainer: {
    paddingLeft: 6,
    paddingRight: 9,
  },
});
