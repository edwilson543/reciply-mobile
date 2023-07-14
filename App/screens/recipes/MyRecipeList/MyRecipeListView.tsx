import React from 'react';

import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Pressable,
  ActivityIndicator,
} from 'react-native';

import RecipeListRow from './RecipeListRow';
import {MyRecipeListNavigationProp} from '../../../navigation/authenticated/navigation.types';
import {ColourScheme, useColourScheme} from '../../../styles/colourScheme';
import {FontSize} from '../../../styles/constants';
import {RecipePreview} from '../../../utils/types/recipes';

type MyRecipeListViewProps = {
  recipes: Array<RecipePreview> | null;
  isLoading: boolean;
  navigation: MyRecipeListNavigationProp;
};

export default function MyRecipeListView({
  recipes,
  isLoading,
  navigation,
}: MyRecipeListViewProps) {
  /** Presentational component listing some recipes. */
  const colourScheme = useColourScheme();
  const styleSheet = styles(colourScheme);

  return (
    <>
      <View style={styleSheet.headerContainer}>
        <Text style={styleSheet.titleText}>My recipes</Text>
        <Pressable style={styleSheet.addRecipeButton}>
          <Text style={styleSheet.addRecipeButtonText}>+</Text>
        </Pressable>
      </View>
      {isLoading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <FlatList
          data={recipes}
          renderItem={({item}) => (
            <RecipeListRow recipe={item} navigation={navigation} />
          )}
          keyExtractor={recipe => `${recipe.id}`}
        />
      )}
    </>
  );
}

const styles = (colourScheme: ColourScheme) =>
  StyleSheet.create({
    headerContainer: {
      // Display
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    titleText: {
      // Display
      textAlign: 'center',
      marginVertical: 20,
      // Typography
      fontSize: FontSize.Header1,
      fontWeight: 'bold',
    },
    addRecipeButton: {
      // Display
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50,
      // Background
      backgroundColor: colourScheme.buttonPrimary,
      // Border
      borderRadius: 25,
    },
    addRecipeButtonText: {
      // Display
      alignItems: 'center',
      justifyContent: 'center',
      // Typography
      fontSize: FontSize.Header3,
      color: colourScheme.buttonPrimaryFont,
    },
  });
