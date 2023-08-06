import React, {useRef} from 'react';
import {useState} from 'react';

import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import {ThumbnailImage} from '../../../components/images/network';
import {TextStyled} from '../../../components/styled';
import DeleteSwipeOption from '../../../components/swipe/options';
import {RecipeListPayload} from '../../../services/restAPI/payloads';
import {ColourScheme, useColourScheme} from '../../../styles/colourScheme';
import {FontSize} from '../../../styles/constants';
import {previewText} from '../../../utils/formatters';

const descriptionPreviewChars = 40;

type RecipeListRowProps = {
  recipe: RecipeListPayload;
  onPress?: () => void;
};

export default function RecipeListRow({recipe, onPress}: RecipeListRowProps) {
  const colourScheme = useColourScheme();
  const styleSheet = styles(colourScheme);
  const scrollRef = useRef<ScrollView>(null);
  const [showOptions, setShowOptions] = useState<boolean>(false);

  function toggleShowOptions() {
    if (showOptions) {
      scrollRef.current?.scrollTo({x: 0, y: 0, animated: true});
      setShowOptions(false);
    } else {
      scrollRef.current?.scrollToEnd({animated: true});
      setShowOptions(true);
    }
  }

  return (
    <ScrollView
      horizontal={true}
      style={styleSheet.scrollView}
      ref={scrollRef}
      onScrollEndDrag={toggleShowOptions}
      showsHorizontalScrollIndicator={false}>
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
      <View>
        <DeleteSwipeOption onPress={() => 1} />
      </View>
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
      width: Dimensions.get('window').width - 15, // todo -> may want to make more robust..
    },
    textContainer: {
      // Display
      flex: 1,
      flexDirection: 'column',
    },
    recipeName: {fontWeight: 'bold'},
    recipeDescription: {fontStyle: 'italic', fontSize: FontSize.TextSmall},
  });
