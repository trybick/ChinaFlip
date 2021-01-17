import React from 'react';
import { Link, useHistory } from 'react-router-native';
import { Button, Text } from 'react-native-elements';
import styled from 'styled-components/native';

export default function CreateSessionPage() {
  const history = useHistory();

  return (
    <Container>
      <Text>Create Page</Text>

      <Link to="/">
        <Button
          buttonStyle={{ marginBottom: 50 }}
          onPress={() => history.push('/')}
          title="Go Home"
        />
      </Link>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;
