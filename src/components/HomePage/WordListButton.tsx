import React from 'react';
import { StyleSheet } from 'react-native';
import { useHistory } from 'react-router-native';
import { Button } from 'react-native-elements';
import { getTitleForDisplay, WordListID, Word as WordType } from 'utils/wordsHelper';
import { ROUTES } from 'utils/routes';

export default function WordListButton({
  wordListID,
  words,
}: {
  wordListID: WordListID;
  words: WordType[];
}) {
  const history = useHistory();

  return (
    <Button
      buttonStyle={styles.button}
      containerStyle={styles.container}
      onPress={() => history.push(`${ROUTES.WORD_LIST}/${wordListID}`, { words, wordListID })}
      title={getTitleForDisplay(wordListID)}
      titleStyle={styles.buttonTitle}
      type="outline"
      raised
    />
  );
}

const styles = StyleSheet.create({
  button: {
    height: 60,
  },
  container: {
    margin: 10,
    minWidth: 160,
    maxWidth: 300,
  },
  buttonTitle: {
    color: '#2196f3',
  },
});
