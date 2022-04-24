import { useEffect, useState } from 'react';
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

  useEffect(() => {
    isHiddenTranslationVisible && setIsHiddenTranslationVisible(false);
  }, [isTranslationHidden, isFlipped, isCompleted]);

  const onPressWord = () => {
    if (isTranslationHidden) {
      setIsHiddenTranslationVisible(!isHiddenTranslationVisible);
    }
  };

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
        tvParallaxProperties={undefined}
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
      <Divider orientation="horizontal" />
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
          tvParallaxProperties={undefined}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
    marginBottom: 16,
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
