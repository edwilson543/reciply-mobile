import React from 'react';

import {StyleSheet, FlatList, View} from 'react-native';

import MenuItem from './MenuItem';
import {MenusTopBackground} from '../../../components/images/local';
import LoadingSpinner from '../../../components/LoadingSpinner';
import {Header1} from '../../../components/styled';
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
          <View style={styles.headerContainer}>
            <Header1 style={styles.titleText} testID={'menus-header'}>
              {menu?.name}
            </Header1>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 10,
  },
  titleText: {
    // Display
    marginVertical: 10,
  },
});
