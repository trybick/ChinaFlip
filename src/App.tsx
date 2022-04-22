import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { BackButton, NativeRouter, Route, Switch } from 'react-router-native';
import { ThemeProvider } from 'react-native-elements';
import { ROUTES } from 'utils/routes';
import { loadSounds } from 'utils/soundPlayer';
import HomePage from 'components/HomePage/HomePage';
import WordListPage from 'components/WordListPage/WordListPage';

export default function App() {
  useEffect(() => {
    loadSounds();
  }, []);

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
