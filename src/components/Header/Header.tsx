import React from 'react';
import { StyleSheet } from 'react-native';
import { useHistory } from 'react-router-native';
import { Header as HeaderComponent } from 'react-native-elements';
import { ROUTES } from 'utils/routes';

export default function Header({
  pageTitle,
  showBackButton,
}: {
  pageTitle: string;
  showBackButton?: boolean;
}) {
  const history = useHistory();
  const commonProps = {
    backgroundColor: '#2196f3',
    centerComponent: { text: pageTitle, style: styles.text },
  };

  return showBackButton ? (
    <HeaderComponent
      leftComponent={{
        text: 'Back',
        style: styles.text,
        onPress: () => history.push(ROUTES.HOME),
      }}
      {...commonProps}
    />
  ) : (
    <HeaderComponent {...commonProps} />
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
  },
});
