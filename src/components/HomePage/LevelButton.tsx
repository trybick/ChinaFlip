import React from 'react';
import { useHistory } from 'react-router-native';
import { Button } from 'react-native-elements';
import { Word as WordType } from 'data/words';

export default function LevelButton({ level, words }: { level: string; words: WordType[] }) {
  const history = useHistory();

  return (
    <Button
      buttonStyle={{ height: 100 }}
      containerStyle={{ margin: 15, width: '40%' }}
      onPress={() => history.push(`level/${level}`, { words, level })}
      title={level}
      type="outline"
      raised
    />
  );
}
