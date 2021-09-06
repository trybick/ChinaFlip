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
    centerContainerStyle: styles.textContainer,
    centerComponent: { text: pageTitle, style: styles.titleText },
    containerStyle: styles.headerContainer,
  };

  return showBackButton ? (
    <HeaderComponent
      leftComponent={{
        text: 'Back',
        style: styles.backText,
        onPress: () => history.push(ROUTES.HOME),
      }}
      leftContainerStyle={styles.textContainer}
      {...commonProps}
    />
  ) : (
    <HeaderComponent {...commonProps} />
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 90,
  },
  textContainer: {
    height: '100%',
    justifyContent: 'center',
  },
  titleText: {
    color: '#fff',
    fontSize: 18,
  },
  backText: {
    color: '#fff',
    fontSize: 14,
  },
});
