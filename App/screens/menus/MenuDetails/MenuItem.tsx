import React from 'react';

import {StyleSheet, View} from 'react-native';

import {TextStyled} from '../../../components/styled';
import {MenuDetailsNavigationProp} from '../../../navigation/authenticated/navigation.types';
import {Day} from '../../../services/restAPI/constants';
import {MenuItemPayload} from '../../../services/restAPI/payloads';
import RecipeListRow from '../../recipes/MyRecipeList/RecipeListRow';

type MenuItemProps = {
  menuItem: MenuItemPayload;
  navigation: MenuDetailsNavigationProp;
};

export default function MenuItem({menuItem, navigation}: MenuItemProps) {
  return (
    <View style={styles.container} key={menuItem.id}>
      <TextStyled>
        {Day[menuItem.day]} • {menuItem.meal_time.toLowerCase()}
      </TextStyled>
      <RecipeListRow recipe={menuItem.recipe} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // Display
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 10,
  },
});
