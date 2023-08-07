import React from 'react';

import {FlatList} from 'react-native';

import MenuDetailsFooter from './MenuDetailsFooter';
import MenuDetailsHeader from './MenuDetailsHeader';
import MenuItem from './MenuItem';
import LoadingSpinner from '../../../components/LoadingSpinner';
import {MenuScreenTemplate} from '../../../components/Templates';
import {MenuDetailsNavigationProp} from '../../../navigation/authenticated/navigation.types';
import {MenuDetailsPayload} from '../../../services/restAPI/payloads';

type MenuDetailsViewProps = {
  menu: MenuDetailsPayload | null;
  onRemoveItem: (menuItemId: number) => Promise<void>;
  onRefresh: () => void;
  isLoading: boolean;
  navigation: MenuDetailsNavigationProp;
};

export default function MenuDetailsView({
  menu,
  onRemoveItem,
  onRefresh,
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
          renderItem={({item}) => (
            <MenuItem menuItem={item} onRemoveItem={onRemoveItem} />
          )}
          ListHeaderComponent={
            <MenuDetailsHeader menu={menu} navigation={navigation} />
          }
          ListFooterComponent={
            <MenuDetailsFooter hasItems={!!menu?.items.length} />
          }
          keyExtractor={item => `${item.id}`}
          onRefresh={onRefresh}
          refreshing={isLoading}
        />
      )}
    </MenuScreenTemplate>
  );
}
