import React from 'react';
import { View } from 'react-native';
import { Link, useHistory } from 'react-router-native';
import { Button, Header } from 'react-native-elements';
import styled from 'styled-components/native';

export default function HomePage() {
  const history = useHistory();

  return (
    <View>
      <Header centerComponent={{ text: 'Meditation Timer', style: { color: '#fff' } }} />

      <Container>
        <Link to="/create">
          <Button
            buttonStyle={{ marginBottom: 50 }}
            onPress={() => history.push('/create')}
            title="Create New Session"
          />
        </Link>
        <Button buttonStyle={{ marginBottom: 50 }} onPress={() => true} title="Load Previous" />
      </Container>
    </View>
  );
}

const Container = styled.View`
  background-color: white;
  align-items: center;
  justify-content: center;
`;
