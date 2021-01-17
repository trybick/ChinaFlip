import React from 'react';
import { Link, useHistory } from 'react-router-native';
import { Button } from 'react-native-elements';
import styled from 'styled-components/native';

export default function HomePage() {
  const history = useHistory();

  return (
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
  );
}

const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;
