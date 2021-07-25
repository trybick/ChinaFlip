import React from 'react';
import { useHistory } from 'react-router-native';
import { Button } from 'react-native-elements';
import styled from 'styled-components/native';
import { Word as WordType } from 'data/words';

export default function LevelButton({ level, words }: { level: string; words: WordType[] }) {
  const history = useHistory();

  return (
    <Button
      onPress={() => history.push(`level/${level}`, { words, level })}
      title={level}
      type="outline"
      raised
    />
  );
}
