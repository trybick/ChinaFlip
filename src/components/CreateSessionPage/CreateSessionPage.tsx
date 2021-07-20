import React from 'react';
import { View } from 'react-native';
import { useHistory } from 'react-router-native';
import { Card, Header, Icon, Text } from 'react-native-elements';
import styled from 'styled-components/native';

const mockData = [
  {
    chinese: 'ni',
    english: 'you',
    audioFile: '001.mp3',
  },
];

export default function CreateSessionPage() {
  const history = useHistory();

  return (
    <View>
      <Header
        leftComponent={{ text: 'Back', style: { color: '#fff' }, onPress: () => history.push('/') }}
        centerComponent={{ text: 'Create', style: { color: '#fff' } }}
      />

      <PageContainer>
        <Card containerStyle={{ width: '100%' }}>
          <Card.Title>Level 1</Card.Title>
          <Card.Divider />
          {mockData.map(item => {
            return (
              <View key={item.audioFile}>
                <WordsContainer>
                  <Word>
                    <Text>{item.chinese}</Text>
                  </Word>
                  <Word>
                    <Text>{item.english}</Text>
                  </Word>
                </WordsContainer>
              </View>
            );
          })}
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

const WordsContainer = styled.View`
  flex-direction: row;
  align-self: flex-start;
  width: 80%;
`;

const Word = styled.View`
  width: 50%;
`;
