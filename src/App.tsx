import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { BackButton, NativeRouter, Route, Switch } from 'react-router-native';
import { ThemeProvider } from 'react-native-elements';
import * as Sentry from 'sentry-expo';
import { ROUTES } from 'utils/routes';
import { loadSounds } from 'utils/soundPlayer';
import HomePage from 'components/HomePage/HomePage';
import WordListPage from 'components/WordListPage/WordListPage';

Sentry.init({
  dsn: 'https://630644df65d24a64a14aa5e819cbf9fe@o367043.ingest.sentry.io/6357720',
  enableInExpoDevelopment: true,
  debug: __DEV__,
});

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
