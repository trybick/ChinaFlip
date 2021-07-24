import React from 'react';
import { View } from 'react-native';
import { useHistory } from 'react-router-native';
import { Button, Header } from 'react-native-elements';
import styled from 'styled-components/native';
import WORDS from 'data/words';

export default function HomePage() {
  const history = useHistory();

  return (
    <View>
      <Header centerComponent={{ text: 'China Flip', style: { color: '#fff' } }} />

      <PageContainer>
        {Object.entries(WORDS).map(([level, words]) => {
          return (
            <Button
              key={level}
              onPress={() => history.push(`level/${level}`, { words, level })}
              title={level}
              type="outline"
              raised
            />
          );
        })}
      </PageContainer>
    </View>
  );
}

const PageContainer = styled.View`
  background-color: white;
  align-items: center;
  justify-content: center;
  margin: 200px 0 0;
`;
