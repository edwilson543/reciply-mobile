import React from 'react';

import {StyleSheet, FlatList, Text, View, Pressable} from 'react-native';

import RecipeListRow from './RecipeListRow';
import LoadingSpinner from '../../../components/LoadingSpinner';
import {MyRecipeListNavigationProp} from '../../../navigation/authenticated/navigation.types';
import {ScreenName} from '../../../navigation/constants';
import {ColourScheme, useColourScheme} from '../../../styles/colourScheme';
import {FontSize} from '../../../styles/constants';
import {RecipeListPreview} from '../../../utils/types/recipes';

type MyRecipeListViewProps = {
  recipes: Array<RecipeListPreview> | null;
  isLoading: boolean;
  onRefresh: () => void;
  navigation: MyRecipeListNavigationProp;
};

export default function MyRecipeListView({
  recipes,
  isLoading,
  onRefresh,
  navigation,
}: MyRecipeListViewProps) {
  /** Presentational component listing some recipes. */
  const colourScheme = useColourScheme();
  const styleSheet = styles(colourScheme);

  return (
    <>
      <View style={styleSheet.headerContainer}>
        <Text style={styleSheet.titleText}>My recipes</Text>
        <Pressable
          onPress={() => navigation.navigate(ScreenName.CreateRecipe)}
          style={styleSheet.addRecipeButton}>
          <Text style={styleSheet.addRecipeButtonText}>+</Text>
        </Pressable>
      </View>
      {isLoading ?? <LoadingSpinner size={'large'} />}
      <FlatList
        data={recipes}
        renderItem={({item}) => (
          <RecipeListRow recipe={item} navigation={navigation} />
        )}
        keyExtractor={recipe => `${recipe.id}`}
        onRefresh={onRefresh}
        refreshing={isLoading}
      />
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
