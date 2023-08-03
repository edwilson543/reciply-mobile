import React from 'react';

import {View} from 'react-native';

import {MenusTopBackground} from '../../components/images/local';
import {bootstrap} from '../../components/styled';

type MenuScreenTemplateProps = {
  children: React.ReactNode;
};

export default function MenuScreenTemplate({
  children,
}: MenuScreenTemplateProps) {
  /** Template screen for menus tab. */
  return (
    <View style={[bootstrap.flex1]}>
      <MenusTopBackground />
      <View style={[bootstrap.px5]}>{children}</View>
    </View>
  );
}
