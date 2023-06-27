import React from 'react';

import {Text, View} from 'react-native';

import {headerStyles} from '../styles/layout/header';

export default function HeaderTitle() {
  return (
    <View>
      <Text style={headerStyles.headerTitle}>reciply</Text>
    </View>
  );
}
