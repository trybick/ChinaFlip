import React from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';
import styled from 'styled-components/native';
import WORDS, { Levels } from 'data/words';
import LevelButton from './LevelButton';

export default function HomePage() {
  return (
    <View>
      <Header centerComponent={{ text: 'China Flip', style: { color: '#fff' } }} />
      <PageContainer>
        {Object.entries(WORDS).map(([level, words]) => (
          <LevelButton key={level} level={level as Levels} words={words} />
        ))}
      </PageContainer>
    </View>
  );
}

const PageContainer = styled.View`
  background-color: white;
  align-items: center;
  justify-content: center;
  margin: 50px 0 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
