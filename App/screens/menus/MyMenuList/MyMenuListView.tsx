import React from 'react';

import {StyleSheet, FlatList, View} from 'react-native';

import MenuListRow from './MenuListRow';
import {MenusTopBackground} from '../../../components/images/local/RecipesTopBackground';
import LoadingSpinner from '../../../components/LoadingSpinner';
import {Header1, PressablePrimary} from '../../../components/styled';
import {MyMenuListNavigationProp} from '../../../navigation/authenticated/navigation.types';
import {MenuListPayload} from '../../../services/restAPI/payloads';

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
    <View style={styles.screenContainer}>
      <MenusTopBackground />
      <View style={styles.headerContainer}>
        <Header1 style={styles.titleText} testID={'menus-header'}>
          menus
        </Header1>
        <PressablePrimary
          // TODO -> once menu create screen available
          // onPress={() => navigation.navigate(ScreenName.CreateRecipe)}
          style={styles.addMenuButton}
          text={'+'}
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
  },
  titleText: {
    // Display
    marginVertical: 10,
  },
  addMenuButton: {
    // Display
    width: 50,
    height: 50,
    // Border
    borderRadius: 25,
  },
});
