import React from 'react';

import {FlatList} from 'react-native';

import MenuDetailsFooter from './MenuDetailsFooter';
import MenuDetailsHeader from './MenuDetailsHeader';
import MenuItem from './MenuItem';
import LoadingSpinner from '../../../components/LoadingSpinner';
import {MenuDetailsNavigationProp} from '../../../navigation/authenticated/navigation.types';
import {MenuDetailsPayload} from '../../../services/restAPI/payloads';
import MenuScreenTemplate from '../MenuScreenTemplate';

type MenuDetailsViewProps = {
  menu: MenuDetailsPayload | null;
  isLoading: boolean;
  navigation: MenuDetailsNavigationProp;
};

export default function MenuDetailsView({
  menu,
  isLoading,
  navigation,
}: MenuDetailsViewProps) {
  /** Presentational component showing the detail for a single menu. */
  return (
    <MenuScreenTemplate>
      {isLoading || !menu ? (
        <LoadingSpinner size={'large'} />
      ) : (
        <FlatList
          data={menu?.items}
          renderItem={({item}) => <MenuItem menuItem={item} />}
          ListHeaderComponent={
            <MenuDetailsHeader menu={menu} navigation={navigation} />
          }
          ListFooterComponent={
            <MenuDetailsFooter hasItems={!!menu?.items.length} />
          }
          keyExtractor={item => `${item.id}`}
          refreshing={isLoading}
        />
      )}
    </MenuScreenTemplate>
  );
}
