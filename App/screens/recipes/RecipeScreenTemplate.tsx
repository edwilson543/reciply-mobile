import React from 'react';

import {StyleSheet, View} from 'react-native';

import {RecipesTopBackground} from '../../components/images/local';
import {bootstrap} from '../../components/styled';
import {ColourScheme, useColourScheme} from '../../styles/colourScheme';

type MenuScreenTemplateProps = {
  children: React.ReactNode;
};

export default function RecipeScreenTemplate({
  children,
}: MenuScreenTemplateProps) {
  /** Template screen for menus tab. */
  const colourScheme = useColourScheme();
  const styleSheet = styles(colourScheme);

  return (
    <View style={[styleSheet.container]}>
      <RecipesTopBackground />
      <View style={[bootstrap.flex1, bootstrap.px5]}>{children}</View>
    </View>
  );
}

const styles = (colourScheme: ColourScheme) =>
  StyleSheet.create({
    container: {flex: 1, backgroundColor: colourScheme.backgroundPrimary},
  });
