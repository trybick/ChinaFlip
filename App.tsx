import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, ThemeProvider, Text } from 'react-native-elements';
import styled from 'styled-components/native';

export default function App() {
  return (
    <ThemeProvider>
      <StatusBar hidden />
      <Container>
        <Button buttonStyle={{ marginBottom: 50 }} onPress={() => true} title="Create New" />
        <Button buttonStyle={{ marginBottom: 50 }} onPress={() => true} title="Load Previous" />
      </Container>
      <Container>
        <Text h4>Past sessions will appear here</Text>
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;
