import React from 'react';
import { View } from 'react-native';
import { useLocation, useHistory } from 'react-router-native';
import { Card, Header } from 'react-native-elements';
import styled from 'styled-components/native';
import { Word as WordType } from 'data/words';
import WordRow from './WordRow';

export default function WordListPage() {
  const history = useHistory();
  const {
    state: { words, level },
  } = useLocation<{ words: WordType[]; level: string }>();

  return (
    <View>
      <Header
        leftComponent={{ text: 'Back', style: { color: '#fff' }, onPress: () => history.push('/') }}
        centerComponent={{ text: 'Create', style: { color: '#fff' } }}
      />

      <PageContainer>
        <Card containerStyle={{ width: '100%' }}>
          <Card.Title>{level}</Card.Title>
          <Card.Divider />
          {words.map(word => (
            <WordRow key={word.id} word={word} />
          ))}
        </Card>
      </PageContainer>
    </View>
  );
}

const PageContainer = styled.View`
  background-color: white;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
`;
