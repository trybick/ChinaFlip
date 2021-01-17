import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NativeRouter, Route, Link, useHistory, Switch } from 'react-router-native';
import { Button, ThemeProvider, Text } from 'react-native-elements';
import styled from 'styled-components/native';

const CreateSessionPage = () => {
  return (
    <Container>
      <Text>Create Page</Text>
    </Container>
  );
};

const HomePage = () => {
  const history = useHistory();

  return (
    <>
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
      <Container>
        <Text h4>Past sessions will appear here</Text>
      </Container>
    </>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <NativeRouter>
        <StatusBar hidden />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/create" component={CreateSessionPage} />
        </Switch>
      </NativeRouter>
    </ThemeProvider>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;
