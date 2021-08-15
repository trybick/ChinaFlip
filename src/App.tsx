import React from 'react';
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { BackButton, NativeRouter, Route, Switch } from 'react-router-native';
import { ThemeProvider } from 'react-native-elements';
import { ROUTES } from 'utils/routes';
import HomePage from 'src/components/HomePage/HomePage';
import WordListPage from 'src/components/WordListPage/WordListPage';

export default function App() {
  return (
    <ThemeProvider>
      <NativeRouter>
        <BackButton />
        <StatusBar style="auto" />

        <Switch>
          <Route exact path={ROUTES.HOME} component={HomePage} />
          <Route exact path={`${ROUTES.WORD_LIST}/:id`} component={WordListPage} />
        </Switch>
      </NativeRouter>
    </ThemeProvider>
  );
}

registerRootComponent(App);
