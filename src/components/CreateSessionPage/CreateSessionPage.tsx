import React from 'react';
import { View } from 'react-native';
import { useHistory } from 'react-router-native';
import { Button, Header, Text } from 'react-native-elements';
import styled from 'styled-components/native';

export default function CreateSessionPage() {
  const history = useHistory();

  return (
    <View>
      <Header
        leftComponent={{ text: 'Back', style: { color: '#fff' }, onPress: () => history.push('/') }}
        centerComponent={{ text: 'Create', style: { color: '#fff' } }}
      />

      <Container>
        <Text>Create Page</Text>

        <Button
          buttonStyle={{ marginBottom: 50 }}
          onPress={() => history.push('/')}
          title="Go Home"
        />
      </Container>
    </View>
  );
}

const Container = styled.View`
  background-color: white;
  align-items: center;
  justify-content: center;
`;
