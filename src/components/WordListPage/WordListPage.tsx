import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useLocation, useHistory } from 'react-router-native';
import { Button, Card, Header, Icon } from 'react-native-elements';
import styled from 'styled-components/native';
import { getTitleForDisplay, WordListID, Word as WordType } from 'database/helper';
import { useCompletedWordsStorage, useIsFlippedStorage } from 'hooks/useCompletedWordsStorage';
import WordRow from './WordRow';
import { ROUTES } from 'utils/routes';

type LocationState = { words: WordType[]; wordListID: WordListID };

export default function WordListPage() {
  const history = useHistory();
  const {
    state: { words, wordListID },
  } = useLocation<LocationState>();
  const { getIsCompleted, toggleCompletedWord } = useCompletedWordsStorage();
  const { isFlipped, isLoading, toggleIsFlipped } = useIsFlippedStorage();

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
          <Card containerStyle={{ width: '100%' }}>
            <Card.Title>
              <Text style={{ fontSize: 22 }}>{getTitleForDisplay(wordListID)}</Text>
            </Card.Title>
            <Card.Divider />
            <Button
              containerStyle={{ alignSelf: 'flex-end', marginBottom: 10, width: 40 }}
              onPress={() => toggleIsFlipped()}
              title={<FlipButtonContent />}
            />

            {!isLoading &&
              words.map(word => (
                <WordRow
                  key={word.id}
                  isCompleted={getIsCompleted(word.id)}
                  isFlipped={isFlipped}
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

const FlipButtonContent = () => (
  <>
    <Icon color="white" name="arrow-swap" size={16} style={{ marginLeft: 2 }} type="fontisto" />
  </>
);
