import React from 'react';

import {faPencil} from '@fortawesome/free-solid-svg-icons';
import {StyleSheet, View} from 'react-native';

import {
  bootstrap,
  Header1,
  PressablePrimary,
  PressablePrimaryIcon,
  TextStyled,
} from '../../../components/styled';
import {MenuDetailsNavigationProp} from '../../../navigation/authenticated/navigation.types';
import {ScreenName} from '../../../navigation/constants';
import {MenuDetailsPayload} from '../../../services/restAPI/payloads';

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
          text={'add meal'}
          onPress={() =>
            navigation.push(ScreenName.AddItemToMenu, {menu: menu})
          }
        />
        <PressablePrimaryIcon icon={faPencil} />
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '50%',
  },
});
