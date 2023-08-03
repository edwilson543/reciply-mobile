import React from 'react';

import {FlatList, View} from 'react-native';

import MenuDetailsHeader from './MenuDetailsHeader';
import MenuItem from './MenuItem';
import {MenusTopBackground} from '../../../components/images/local';
import LoadingSpinner from '../../../components/LoadingSpinner';
import {bootstrap} from '../../../components/styled';
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
    <View style={[bootstrap.flex1]}>
      <MenusTopBackground />
      {isLoading ? (
        <LoadingSpinner size={'large'} />
      ) : (
        <FlatList
          data={menu?.items}
          ListHeaderComponent={<MenuDetailsHeader menu={menu} />}
          renderItem={({item}) => <MenuItem menuItem={item} />}
          keyExtractor={item => `${item.id}`}
          refreshing={isLoading}
        />
      )}
    </View>
  );
}
