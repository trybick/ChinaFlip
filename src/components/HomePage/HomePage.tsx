import React from 'react';
import { View } from 'react-native';
import { useHistory } from 'react-router-native';
import { Button, Header } from 'react-native-elements';
import styled from 'styled-components/native';

export default function HomePage() {
  const history = useHistory();

  return (
    <View>
      <Header centerComponent={{ text: 'China Flip', style: { color: '#fff' } }} />

      <PageContainer>
        <Button onPress={() => history.push('/level-1')} title="Level 1" type="outline" raised />
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
