import React from 'react';

import {StyleSheet, FlatList, View, Pressable} from 'react-native';

import RecipeListRow from './RecipeListRow';
import LoadingSpinner from '../../../components/LoadingSpinner';
import {TextStyled} from '../../../components/styled';
import {MyRecipeListNavigationProp} from '../../../navigation/authenticated/navigation.types';
import {ScreenName} from '../../../navigation/constants';
import {RecipeListPayload} from '../../../services/restAPI/payloads';
import {ColourScheme, useColourScheme} from '../../../styles/colourScheme';
import {FontSize} from '../../../styles/constants';

type MyRecipeListViewProps = {
  recipes: Array<RecipeListPayload> | null;
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
        <TextStyled style={styleSheet.titleText}>My recipes</TextStyled>
        <Pressable
          onPress={() => navigation.navigate(ScreenName.CreateRecipe)}
          style={styleSheet.addRecipeButton}>
          <TextStyled style={styleSheet.addRecipeButtonText}>+</TextStyled>
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
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      // Typography
      fontSize: FontSize.Header3,
      color: colourScheme.buttonPrimaryFont,
    },
  });
