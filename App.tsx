import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, ThemeProvider } from 'react-native-elements';

export default function App() {
  return (
    <ThemeProvider>
      <View style={styles.container}>
        <Text>Opdden up sssApadfp.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
        <Button title="Hey!" />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
