import React from 'react';

import {StyleSheet, View} from 'react-native';

import {TextStyled} from '../../../components/styled';
import {Day} from '../../../services/restAPI/constants';
import {MenuItemPayload} from '../../../services/restAPI/payloads';
import RecipeListRow from '../../recipes/MyRecipeList/RecipeListRow';

type MenuItemProps = {
  menuItem: MenuItemPayload;
};

export default function MenuItem({menuItem}: MenuItemProps) {
  return (
    <View
      style={styles.container}
      key={menuItem.id}
      testID={`menu-item-${menuItem.id}`}>
      <TextStyled>
        {Day[menuItem.day].toLowerCase()} • {menuItem.meal_time.toLowerCase()}
      </TextStyled>
      <RecipeListRow recipe={menuItem.recipe} />
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
