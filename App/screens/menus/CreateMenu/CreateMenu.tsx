import React from 'react';
import {useState} from 'react';

import CreateMenuView from './CreateMenuView';
import {CreateMenuProps} from '../../../navigation/authenticated/navigation.types';
import {ScreenName} from '../../../navigation/constants';
import {
  CreateMenuErrors,
  CreateMenuRequestPayload,
} from '../../../services/restAPI/payloads';
import {createMenu} from '../../../services/restAPI/requests/menus';

const initialData = {
  name: '',
  description: '',
  add_suggestions: true,
};

export function CreateMenu({navigation}: CreateMenuProps) {
  /** Allow users to create a new menu. */
  const [newMenu, setNewMenu] = useState<CreateMenuRequestPayload>(initialData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<CreateMenuErrors | null>(null);

  async function submitForm(): Promise<void> {
    setIsLoading(true);
    createMenu(newMenu)
      .then(({data, errors: newErrors}) => {
        if (data) {
          navigation.replace(ScreenName.ManageMenuItems, {
            menu: data,
          });
        } else {
          setErrors(newErrors);
        }
      })
      .then(() => setIsLoading(false));
  }

  return (
    <CreateMenuView
      newMenu={newMenu}
      onNewMenuChange={setNewMenu}
      submitForm={submitForm}
      isLoading={isLoading}
      errors={errors}
    />
  );
}
