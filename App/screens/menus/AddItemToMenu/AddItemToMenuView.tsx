import React from 'react';

import {TextStyled} from '../../../components/styled';
import MenuScreenTemplate from '../MenuScreenTemplate';

type AddItemToMenuViewProps = {
  addItemToMenu: (recipeId: number) => void;
};

export default function AddItemToMenuView({
  addItemToMenu,
}: AddItemToMenuViewProps) {
  return (
    <MenuScreenTemplate>
      <TextStyled>add an items</TextStyled>
    </MenuScreenTemplate>
  );
}
