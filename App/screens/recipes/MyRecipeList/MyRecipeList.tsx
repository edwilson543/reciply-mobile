import React from 'react';
import {Button, Text, View} from 'react-native';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Route} from '../../../navigation/constants';
import {RecipeStackParams} from '../../../navigation/stackParams';

type MyRecipeListProps = NativeStackScreenProps<
  RecipeStackParams,
  Route.MyRecipeList
>;

export function MyRecipeList({navigation}: MyRecipeListProps) {
  /** List the recipes the user has written themselves. */
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Mars bars on toast</Text>
        <Button
          title={'view details'}
          onPress={() =>
            navigation.push(Route.RecipeDetails, {recipeId: 123456789})
          }
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Chicken fajita lasagne</Text>
        <Button
          title={'view details'}
          onPress={() =>
            navigation.push(Route.RecipeDetails, {recipeId: 1000000})
          }
        />
      </View>
    </View>
  );
}
