import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Divider, Icon, Text } from 'react-native-elements';
import { Word as WordType } from 'database/helper';

export default function WordRow({
  isCompleted,
  isFlipped,
  toggleCompletedWord,
  word: { id, chinese, english },
}: {
  isCompleted: boolean;
  isFlipped: boolean;
  toggleCompletedWord: (id: string) => Promise<void>;
  word: WordType;
}) {
  const englishWord = (
    <View style={styles.word}>
      <Text>{english}</Text>
    </View>
  );

  const chineseWord = (
    <View style={styles.word}>
      <Icon color="grey" name="volume-high" size={20} style={styles.audioIcon} type="ionicon" />
      <Text style={styles.chineseText}>{chinese}</Text>
    </View>
  );

  return (
    <>
      <View key={id} style={[styles.row, isCompleted && styles.completedRow]}>
        <View style={styles.wordsContainer}>
          {isFlipped ? (
            <>
              {chineseWord}
              {englishWord}
            </>
          ) : (
            <>
              {englishWord}
              {chineseWord}
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
    marginTop: '5%',
    marginBottom: '4%',
  },
  completedRow: {
    opacity: 0.4,
  },
  audioIcon: {
    marginRight: 4,
  },
  wordsContainer: {
    flexDirection: 'row',
  },
  word: {
    width: '46%',
    flexDirection: 'row',
  },
  chineseText: {
    lineHeight: 20,
  },
});
