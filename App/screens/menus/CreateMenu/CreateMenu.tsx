import React from 'react';
import {useState} from 'react';

import CreateMenuView from './CreateMenuView';
import {CreateMenuProps} from '../../../navigation/authenticated/navigation.types';
import {ScreenName} from '../../../navigation/constants';
import {StatusCode} from '../../../services/restAPI/constants';
import {
  CreateMenuErrors,
  MenuDetailsPayload,
} from '../../../services/restAPI/payloads';
import {createMenu} from '../../../services/restAPI/requests/menus';

export function CreateMenu({navigation}: CreateMenuProps) {
  /** Allow users to create a new menu. */
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<CreateMenuErrors | null>(null);

  async function submitForm(): Promise<void> {
    setIsLoading(true);
    createMenu(name, description)
      .then(response => {
        if (response.status >= StatusCode.BadRequest) {
          response.json().then(data => setErrors(data));
        } else {
          response.json().then((menu: MenuDetailsPayload) =>
            navigation.navigate(ScreenName.AddItemToMenu, {
              menu: menu,
            }),
          );
        }
      })
      .then(() => setIsLoading(false));
  }

  return (
    <CreateMenuView
      name={name}
      onNameChange={setName}
      description={description}
      onDescriptionChange={setDescription}
      submitForm={submitForm}
      isLoading={isLoading}
      errors={errors}
    />
  );
}
