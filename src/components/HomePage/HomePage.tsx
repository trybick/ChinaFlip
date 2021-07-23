import React from 'react';
import { View } from 'react-native';
import { useHistory } from 'react-router-native';
import { Button, Header } from 'react-native-elements';
import styled from 'styled-components/native';
import words from 'data/words';

export default function HomePage() {
  const history = useHistory();

  return (
    <View>
      <Header centerComponent={{ text: 'China Flip', style: { color: '#fff' } }} />

      <PageContainer>
        {Object.entries(words).map(([key, value]) => {
          return (
            <Button
              key={key}
              onPress={() => history.push(`level/${key}`, value)}
              title={key}
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
