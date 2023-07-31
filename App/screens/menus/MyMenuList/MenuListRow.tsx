import React from 'react';

import {Pressable, StyleSheet, View} from 'react-native';

import {TextStyled} from '../../../components/styled';
import {MyMenuListNavigationProp} from '../../../navigation/authenticated/navigation.types';
import {ScreenName} from '../../../navigation/constants';
import {MenuListPayload} from '../../../services/restAPI/payloads';
import {FontSize} from '../../../styles/constants';
import {previewText} from '../../../utils/formatters';

const descriptionPreviewChars = 40;

type MenuListRowProps = {
  menu: MenuListPayload;
  navigation: MyMenuListNavigationProp;
};

export default function MenuListRow({menu, navigation}: MenuListRowProps) {
  const mealText = menu.number_of_items === 1 ? 'meal' : 'meals';

  return (
    <Pressable
      onPress={() =>
        navigation.push(ScreenName.MenuDetails, {
          menuId: menu.id,
        })
      }
      testID={`menu-${menu.id}`}>
      <View style={styles.container} key={menu.id}>
        <View style={styles.textContainer}>
          <TextStyled style={styles.menuName}>{menu.name}</TextStyled>
          <TextStyled style={styles.menuDescription}>
            {previewText(menu.description, descriptionPreviewChars)}
          </TextStyled>
        </View>
        <TextStyled>
          {menu.number_of_items} {mealText}
        </TextStyled>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    // Display
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  textContainer: {
    // Display
    flex: 1,
    flexDirection: 'column',
  },
  menuName: {fontWeight: 'bold'},
  menuDescription: {fontStyle: 'italic', fontSize: FontSize.TextSmall},
});
