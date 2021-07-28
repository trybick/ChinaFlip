import React from 'react';
import { useHistory } from 'react-router-native';
import { Button } from 'react-native-elements';
import { getTitleForDisplay, Level, Word as WordType } from 'database/helper';
import { ROUTES } from 'utils/routes';

export default function LevelButton({ level, words }: { level: Level; words: WordType[] }) {
  const history = useHistory();

  return (
    <Button
      buttonStyle={{ height: 100 }}
      containerStyle={{ margin: 15, width: '40%' }}
      onPress={() => history.push(`${ROUTES.WORD_LIST}/${level}`, { words, level })}
      title={getTitleForDisplay(level)}
      type="outline"
      raised
    />
  );
}
