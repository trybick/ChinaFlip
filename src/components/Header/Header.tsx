import React from 'react';
import { StyleSheet } from 'react-native';
import { useHistory } from 'react-router-native';
import { Header as HeaderComponent } from 'react-native-elements';
import { ROUTES } from 'utils/routes';

const text = 'ChinaFlip';

export default function Header({ showBackButton }: { showBackButton?: boolean }) {
  const history = useHistory();

  return showBackButton ? (
    <HeaderComponent
      backgroundColor="#2196f3"
      leftComponent={{
        text: 'Back',
        style: styles.text,
        onPress: () => history.push(ROUTES.HOME),
      }}
      centerComponent={{ text, style: styles.text }}
    />
  ) : (
    <HeaderComponent backgroundColor="#2196f3" centerComponent={{ text, style: styles.text }} />
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
  },
});
