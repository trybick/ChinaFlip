import React from 'react';
import { View } from 'react-native';
import { useLocation, useHistory } from 'react-router-native';
import { Card, Header, Icon, Text } from 'react-native-elements';
import styled from 'styled-components/native';
import { Word as WordType } from 'data/words';

export default function BasicsIPage() {
  const history = useHistory();
  const location = useLocation<{ words: WordType[] }>();

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
          {location.state.words.map(({ id, chinese, english }) => {
            return (
              <Row key={id}>
                <WordsContainer>
                  <Word>
                    <Text>{chinese}</Text>
                  </Word>
                  <Word>
                    <Text>{english}</Text>
                  </Word>
                </WordsContainer>

                <Icon color="grey" name="volume-high" type="ionicon" />
                <Icon color="grey" name="star" style={{ marginLeft: 8 }} type="font-awesome" />
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
