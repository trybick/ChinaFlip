import React from 'react';
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { NativeRouter, Route, Switch } from 'react-router-native';
import { ThemeProvider } from 'react-native-elements';
import HomePage from 'src/components/HomePage/HomePage';
import CreateSessionPage from 'src/components/CreateSessionPage/CreateSessionPage';

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

registerRootComponent(App);
