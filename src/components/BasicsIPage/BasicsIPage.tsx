import React from 'react';
import { View } from 'react-native';
import { useHistory } from 'react-router-native';
import { Card, Header, Icon, Text } from 'react-native-elements';
import styled from 'styled-components/native';
import words from '../../../data/words.json';

export default function BasicsIPage() {
  const history = useHistory();

  return (
    <View>
      <Header
        leftComponent={{ text: 'Back', style: { color: '#fff' }, onPress: () => history.push('/') }}
        centerComponent={{ text: 'Create', style: { color: '#fff' } }}
      />

      <PageContainer>
        <Card containerStyle={{ width: '100%' }}>
          <Card.Title>Basics I</Card.Title>
          <Card.Divider />
          {words['basics-1'].map(item => {
            return (
              <Row key={item.id}>
                <WordsContainer>
                  <Word>
                    <Text>{item.chinese}</Text>
                  </Word>
                  <Word>
                    <Text>{item.english}</Text>
                  </Word>
                </WordsContainer>

                <Icon
                  color="grey"
                  name="volume-high"
                  onPress={() => console.log('hello')}
                  type="ionicon"
                />
                <Icon
                  color="grey"
                  name="star"
                  onPress={() => console.log('hello')}
                  style={{ marginLeft: 8 }}
                  type="font-awesome"
                />
              </Row>
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

const Row = styled.View`
  flex-direction: row;
`;

const WordsContainer = styled.View`
  flex-direction: row;
  width: 85%;
`;

const Word = styled.View`
  width: 50%;
`;
