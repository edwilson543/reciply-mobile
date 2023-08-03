import React from 'react';

import {View} from 'react-native';

import {RecipesTopBackground} from '../../components/images/local';
import {bootstrap} from '../../components/styled';

type MenuScreenTemplateProps = {
  children: React.ReactNode;
};

export default function RecipeScreenTemplate({
  children,
}: MenuScreenTemplateProps) {
  /** Template screen for menus tab. */
  return (
    <View style={[bootstrap.flex1]}>
      <RecipesTopBackground />
      <View style={[bootstrap.px5]}>{children}</View>
    </View>
  );
}
