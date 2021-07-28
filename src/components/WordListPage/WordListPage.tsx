import React from 'react';
import { ScrollView, View } from 'react-native';
import { useLocation, useHistory } from 'react-router-native';
import { Card, Header } from 'react-native-elements';
import styled from 'styled-components/native';
import { getTitleForDisplay, Level, Word as WordType } from 'database/helper';
import { useCompletedWordsStorage } from 'hooks/useCompletedWordsStorage';
import WordRow from './WordRow';
import { ROUTES } from '../../utils/routes';

export default function WordListPage() {
  const history = useHistory();
  const {
    state: { words, level },
  } = useLocation<{ words: WordType[]; level: Level }>();
  const { getIsCompleted, toggleCompletedWord } = useCompletedWordsStorage();

  return (
    <View>
      <Header
        leftComponent={{
          text: 'Back',
          style: { color: '#fff' },
          onPress: () => history.push(ROUTES.HOME),
        }}
        centerComponent={{ text: 'ChinaFlip', style: { color: '#fff' } }}
      />

      <ScrollView>
        <PageContainer>
          <Card containerStyle={{ width: '90%' }}>
            <Card.Title>{getTitleForDisplay(level)}</Card.Title>
            <Card.Divider />
            {words.map(word => (
              <WordRow
                key={word.id}
                isCompleted={getIsCompleted(word.id)}
                toggleCompletedWord={toggleCompletedWord}
                word={word}
              />
            ))}
          </Card>
        </PageContainer>
      </ScrollView>
    </View>
  );
}

const PageContainer = styled.View`
  background-color: white;
  align-items: center;
  justify-content: center;
  margin-bottom: 30%;
`;
