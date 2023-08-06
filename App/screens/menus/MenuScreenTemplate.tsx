import React from 'react';

import {StyleSheet, View} from 'react-native';

import {MenusTopBackground} from '../../components/images/local';
import {bootstrap} from '../../components/styled';
import {ColourScheme, useColourScheme} from '../../styles/colourScheme';

type MenuScreenTemplateProps = {
  children: React.ReactNode;
};

export default function MenuScreenTemplate({
  children,
}: MenuScreenTemplateProps) {
  /** Template screen for menus tab. */
  const colourScheme = useColourScheme();
  const styleSheet = styles(colourScheme);

  return (
    <View style={[styleSheet.container]}>
      <MenusTopBackground />
      <View style={[bootstrap.flex1, bootstrap.px5]}>{children}</View>
    </View>
  );
}

const styles = (colourScheme: ColourScheme) =>
  StyleSheet.create({
    container: {flex: 1, backgroundColor: colourScheme.backgroundPrimary},
  });
