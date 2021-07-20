import React from 'react';
import { View } from 'react-native';
import { useHistory } from 'react-router-native';
import { Header, Text } from 'react-native-elements';
import styled from 'styled-components/native';

export default function CreateSessionPage() {
  const history = useHistory();

  return (
    <View>
      <Header
        leftComponent={{ text: 'Back', style: { color: '#fff' }, onPress: () => history.push('/') }}
        centerComponent={{ text: 'Create', style: { color: '#fff' } }}
      />

      <PageContainer>
        <Text>Create Page</Text>
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
