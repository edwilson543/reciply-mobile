import React from 'react';

import {faPencil} from '@fortawesome/free-solid-svg-icons';
import {StyleSheet, FlatList, View} from 'react-native';

import MenuItem from './MenuItem';
import {MenusTopBackground} from '../../../components/images/local';
import LoadingSpinner from '../../../components/LoadingSpinner';
import {bootstrap, PressablePrimaryIcon} from '../../../components/styled';
import {
  Header1,
  PressablePrimary,
  TextStyled,
} from '../../../components/styled';
import {MenuDetailsPayload} from '../../../services/restAPI/payloads';

type MenuDetailsViewProps = {
  menu: MenuDetailsPayload | null;
  isLoading: boolean;
};

export default function MenuDetailsView({
  menu,
  isLoading,
}: MenuDetailsViewProps) {
  /** Presentational component showing the detail for a single menu. */
  return (
    <View style={styles.screenContainer}>
      <MenusTopBackground />
      {isLoading ? (
        <LoadingSpinner size={'large'} />
      ) : (
        <>
          <View style={[styles.headerContainer, bootstrap.px5]}>
            <Header1 style={[bootstrap.my3]} testID={'menus-header'}>
              {menu?.name}
            </Header1>
            <TextStyled style={[bootstrap.my3]}>{menu?.description}</TextStyled>
            <View style={styles.buttonContainer}>
              <PressablePrimary text={'add meals'} />
              <PressablePrimaryIcon icon={faPencil} />
            </View>
          </View>
          <FlatList
            data={menu?.items}
            renderItem={({item}) => <MenuItem menuItem={item} />}
            keyExtractor={item => `${item.id}`}
            refreshing={isLoading}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
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
