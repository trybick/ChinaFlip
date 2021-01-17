import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, ThemeProvider } from 'react-native-elements';
import styled from 'styled-components/native';

export default function App() {
  return (
    <ThemeProvider>
      <Container>
        <StatusBar hidden />
        <Button title="test" />
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
