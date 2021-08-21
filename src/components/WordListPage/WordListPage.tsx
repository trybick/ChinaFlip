import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useLocation } from 'react-router-native';
import { Card, FAB, Icon, Switch, Text } from 'react-native-elements';
import { getTitleForDisplay, WordListID, Word as WordType } from 'database/words/helper';
import {
  useCompletedWordsStorage,
  useIsFlippedStorage,
  useIsTranslationHiddenStorage,
} from 'hooks/useCompletedWordsStorage';
import Header from 'components/Header/Header';
import WordRow from './WordRow';

type LocationState = { words: WordType[]; wordListID: WordListID };

const FlipIcon = () => (
  <>
    <Icon color="white" name="arrow-swap" size={14} style={styles.flipIcon} type="fontisto" />
  </>
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
              <Text style={styles.hideTranslationText}>Hide Translation</Text>
              <Switch
                onValueChange={toggleIsTranslationHidden}
                style={styles.switch}
                value={isTranslationHidden}
              />

              <FAB
                color="#2089dc"
                containerStyle={styles.flipButton}
                icon={<FlipIcon />}
                onPress={toggleIsFlipped}
                size="small"
                title="Flip"
              />
            </View>

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
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  hideTranslationText: {
    textAlignVertical: 'center',
  },
  switch: {
    marginRight: 16,
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
  },
  flipButton: {
    // alignSelf: 'flex-end',
    // height: 40,
  },
  flipIcon: {
    marginLeft: 2,
  },
});
