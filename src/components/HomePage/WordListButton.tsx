import React from 'react';
import { useHistory } from 'react-router-native';
import { Button } from 'react-native-elements';
import { getTitleForDisplay, WordListID, Word as WordType } from 'database/helper';
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
      buttonStyle={{ height: 100 }}
      containerStyle={{ margin: 15, width: '40%' }}
      onPress={() => history.push(`${ROUTES.WORD_LIST}/${wordListID}`, { words, wordListID })}
      title={getTitleForDisplay(wordListID)}
      type="outline"
      raised
    />
  );
}
