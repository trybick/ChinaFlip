import React from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';
import styled from 'styled-components/native';
import WORDS from 'database/words';
import { WordListID } from 'database/helper';
import WordListButton from './WordListButton';

export default function HomePage() {
  return (
    <View>
      <Header centerComponent={{ text: 'ChinaFlip', style: { color: '#fff' } }} />
      <PageContainer>
        {Object.entries(WORDS).map(([wordListID, words]) => (
          <WordListButton key={wordListID} wordListID={wordListID as WordListID} words={words} />
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
