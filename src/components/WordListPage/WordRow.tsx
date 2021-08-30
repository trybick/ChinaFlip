import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { Divider, Icon, Text } from 'react-native-elements';
import { Word as WordType } from 'utils/wordsHelper';
import { playSound } from 'utils/soundPlayer';

export default function WordRow({
  isCompleted,
  isFlipped,
  isTranslationHidden,
  toggleCompletedWord,
  word: { id, chinese, english },
}: {
  isCompleted: boolean;
  isFlipped: boolean;
  isTranslationHidden: boolean;
  toggleCompletedWord: (id: string) => Promise<void>;
  word: WordType;
}) {
  const [isHiddenTranslationVisible, setIsHiddenTranslationVisible] = useState(false);

  const onPressWord = () => {
    if (isTranslationHidden) {
      setIsHiddenTranslationVisible(!isHiddenTranslationVisible);
    }
  };

  useEffect(() => {
    setIsHiddenTranslationVisible(false);
  }, [isTranslationHidden, isFlipped, isCompleted]);

  const makeHiddenWord = (text: string) => Array(text.split('').length).fill('.');

  const EnglishWord = ({ isHidden }: { isHidden?: boolean }) => (
    <View style={styles.wordWrapper}>
      <TouchableWithoutFeedback {...(isFlipped && { onPress: onPressWord })}>
        <Text style={[styles.englishText, isHidden && styles.hiddenText]}>
          {isHidden ? makeHiddenWord(english) : english}
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );

  const ChineseWord = ({ isHidden }: { isHidden?: boolean }) => (
    <View style={styles.wordWrapper}>
      <Icon
        color="grey"
        iconStyle={styles.volumeIconIcon}
        name="volume"
        onPress={() => playSound(id)}
        size={19}
        type="foundation"
      />
      <TouchableWithoutFeedback {...(!isFlipped && { onPress: onPressWord })}>
        <Text style={[styles.chineseText, isHidden && styles.hiddenText]}>
          {isHidden ? makeHiddenWord(chinese) : chinese}
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );

  return (
    <>
      <View key={id} style={[styles.row, isCompleted && styles.completedRow]}>
        <View style={styles.wordsContainer}>
          {isFlipped ? (
            <>
              <ChineseWord />
              <EnglishWord isHidden={isTranslationHidden && !isHiddenTranslationVisible} />
            </>
          ) : (
            <>
              <EnglishWord />
              <ChineseWord isHidden={isTranslationHidden && !isHiddenTranslationVisible} />
            </>
          )}
        </View>

        <Icon
          color="grey"
          name={isCompleted ? 'checkbox-marked-outline' : 'checkbox-blank-outline'}
          onPress={() => toggleCompletedWord(id)}
          size={24}
          type="material-community"
        />
      </View>
      <Divider orientation="horizontal" />
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 18,
  },
  completedRow: {
    opacity: 0.4,
  },
  wordsContainer: {
    flexDirection: 'row',
  },
  wordWrapper: {
    width: '47%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  englishText: {
    fontSize: 16,
    width: '95%',
  },
  chineseText: {
    fontSize: 16,
    width: '82%',
  },
  volumeIconIcon: {
    padding: 6,
  },
  hiddenText: {
    letterSpacing: 2,
  },
});
