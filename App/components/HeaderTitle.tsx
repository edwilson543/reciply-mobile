import React from 'react';
import {useColorScheme} from 'react-native';
import {Text, View} from 'react-native';

import {header} from '../styles/layout';

export default function HeaderTitle() {
  const colourTheme = useColorScheme();

  return (
    <View>
      <Text style={header.headerStyles(colourTheme).headerTitle}>reciply</Text>
    </View>
  );
}
