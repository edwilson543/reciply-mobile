import React from 'react';

import AddItemToMenuView from './AddItemToMenuView';
import {AddItemToMenuProps} from '../../../navigation/authenticated/navigation.types';

export function AddItemToMenu({route}: AddItemToMenuProps) {
  async function addItemToMenu() {}

  return <AddItemToMenuView addItemToMenu={addItemToMenu} />;
}
