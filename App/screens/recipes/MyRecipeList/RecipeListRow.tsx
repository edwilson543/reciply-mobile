import React from 'react';

import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import {ThumbnailImage} from '../../../components/images/network';
import {TextStyled} from '../../../components/styled';
import DeleteSwipeOption, {
  DeleteSwipeOptionProps,
} from '../../../components/swipe/Options';
import {RecipeListPayload} from '../../../services/restAPI/payloads';
import {ColourScheme, useColourScheme} from '../../../styles/colourScheme';
import {FontSize} from '../../../styles/constants';
import {previewText} from '../../../utils/formatters';

const descriptionPreviewChars = 40;
const utilisedDeviceWidth = Dimensions.get('window').width - 20;

type RecipeListRowProps = {
  recipe: RecipeListPayload;
  onPress?: () => void;
  deleteOptions?: DeleteSwipeOptionProps;
};

export default function RecipeListRow({
  recipe,
  onPress,
  deleteOptions,
}: RecipeListRowProps) {
  const colourScheme = useColourScheme();
  const styleSheet = styles(colourScheme);

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      snapToOffsets={[utilisedDeviceWidth]}
      scrollEnabled={!!deleteOptions}
      style={styleSheet.scrollView}>
      <Pressable onPress={onPress} testID={`recipe-${recipe.id}`}>
        <View style={styleSheet.recipeContainer} key={recipe.id}>
          <View style={styleSheet.textContainer}>
            <TextStyled style={styleSheet.recipeName}>{recipe.name}</TextStyled>
            <TextStyled style={styleSheet.recipeDescription}>
              {previewText(recipe.description, descriptionPreviewChars)}
            </TextStyled>
          </View>
          <ThumbnailImage imageSource={recipe.hero_image_source} />
        </View>
      </Pressable>
      <View>{deleteOptions && <DeleteSwipeOption {...deleteOptions} />}</View>
    </ScrollView>
  );
}

const styles = (colourScheme: ColourScheme) =>
  StyleSheet.create({
    scrollView: {
      // Display
      height: 75,
      marginVertical: 5,
      // Background and border
      borderColor: colourScheme.fontPrimary,
      borderWidth: 0.5,
      borderRadius: 5,
    },
    recipeContainer: {
      // Display
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 5,
      padding: 10,
      width: utilisedDeviceWidth,
      // Background
      backgroundColor: colourScheme.backgroundPrimary,
    },
    textContainer: {
      // Display
      flex: 1,
      flexDirection: 'column',
    },
    recipeName: {fontWeight: 'bold'},
    recipeDescription: {fontStyle: 'italic', fontSize: FontSize.TextSmall},
  });
