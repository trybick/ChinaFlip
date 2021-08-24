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
      type="outline"
      raised
    />
  );
}

const styles = StyleSheet.create({
  button: {
    height: 100,
  },
  container: {
    margin: 15,
    width: '40%',
  },
});
