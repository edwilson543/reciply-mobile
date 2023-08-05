import React from 'react';

import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {StyleSheet, FlatList, View} from 'react-native';

import MenuListRow from './MenuListRow';
import LoadingSpinner from '../../../components/LoadingSpinner';
import {Header1, PressablePrimaryIcon} from '../../../components/styled';
import {MyMenuListNavigationProp} from '../../../navigation/authenticated/navigation.types';
import {ScreenName} from '../../../navigation/constants';
import {MenuListPayload} from '../../../services/restAPI/payloads';
import MenuScreenTemplate from '../MenuScreenTemplate';

type MyMenuListViewProps = {
  menus: Array<MenuListPayload> | null;
  isLoading: boolean;
  onRefresh: () => void;
  navigation: MyMenuListNavigationProp;
};

export default function MyMenuListView({
  menus,
  isLoading,
  onRefresh,
  navigation,
}: MyMenuListViewProps) {
  /** Presentational component listing some menus. */
  return (
    <MenuScreenTemplate>
      <View style={styles.headerContainer}>
        <Header1 style={styles.titleText} testID={'menus-header'}>
          menus
        </Header1>
        <PressablePrimaryIcon
          onPress={() => navigation.navigate(ScreenName.CreateMenu)}
          icon={faPlus}
        />
      </View>
      {isLoading ?? <LoadingSpinner size={'large'} />}
      <FlatList
        data={menus}
        renderItem={({item}) => (
          <MenuListRow menu={item} navigation={navigation} />
        )}
        keyExtractor={menu => `${menu.id}`}
        onRefresh={onRefresh}
        refreshing={isLoading}
      />
    </MenuScreenTemplate>
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
