import React from 'react';

import {StyleSheet, View} from 'react-native';

import {RecipesTopBackground, MenusTopBackground} from './images/local';
import {bootstrap} from './styled';
import {ColourScheme, useColourScheme} from '../styles/colourScheme';

type TabTemplateProps = {
  children: React.ReactNode;
};

export function MenuScreenTemplate({children}: TabTemplateProps) {
  /** Template screen for menus tab. */
  return <Template topBackground={<MenusTopBackground />}>{children}</Template>;
}

export function RecipeScreenTemplate({children}: TabTemplateProps) {
  /** Template screen for menus tab. */
  return (
    <Template topBackground={<RecipesTopBackground />}>{children}</Template>
  );
}

type TemplateProps = {
  topBackground: React.ReactNode;
  children: React.ReactNode;
};

function Template({topBackground, children}: TemplateProps) {
  /** Template screen for menus tab. */
  const colourScheme = useColourScheme();
  const styleSheet = styles(colourScheme);

  return (
    <View style={[styleSheet.container]}>
      {topBackground}
      <View style={[bootstrap.flex1, bootstrap.px5]}>{children}</View>
    </View>
  );
}

const styles = (colourScheme: ColourScheme) =>
  StyleSheet.create({
    container: {flex: 1, backgroundColor: colourScheme.backgroundPrimary},
  });
