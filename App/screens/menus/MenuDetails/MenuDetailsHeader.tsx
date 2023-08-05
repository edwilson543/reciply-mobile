import React from 'react';

import {faPlus, faPencil} from '@fortawesome/free-solid-svg-icons';
import {StyleSheet, View} from 'react-native';

import {
  bootstrap,
  Header1,
  PressablePrimary,
  PressableSecondary,
  TextStyled,
} from '../../../components/styled';
import {MenuDetailsNavigationProp} from '../../../navigation/authenticated/navigation.types';
import {ScreenName} from '../../../navigation/constants';
import {MenuDetailsPayload} from '../../../services/restAPI/payloads';
import {FontSize} from '../../../styles/constants';

type MenuDetailsHeaderProps = {
  menu: MenuDetailsPayload;
  navigation: MenuDetailsNavigationProp;
};

export default function MenuDetailsHeader({
  menu,
  navigation,
}: MenuDetailsHeaderProps) {
  return (
    <View style={[styles.headerContainer]}>
      <Header1 style={[bootstrap.my3]} testID={'menus-header'}>
        {menu?.name}
      </Header1>
      <TextStyled style={[bootstrap.my3]}>{menu?.description}</TextStyled>
      <View style={styles.buttonContainer}>
        <PressablePrimary
          text={'add'}
          onPress={() =>
            navigation.push(ScreenName.AddItemToMenu, {menu: menu})
          }
          faIcon={faPlus}
          style={styles.button}
        />
        <PressableSecondary
          text={'edit'}
          faIcon={faPencil}
          style={styles.button}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    // Display
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  buttonContainer: {
    // Display
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  button: {
    width: '30%',
    fontSize: FontSize.TextLarge,
    borderRadius: 15,
  },
});
