import React from 'react';
import {useState} from 'react';

import CreateMenuView from './CreateMenuView';
import {CreateMenuProps} from '../../../navigation/authenticated/navigation.types';
import {ScreenName} from '../../../navigation/constants';
import {CreateMenuErrors} from '../../../services/restAPI/payloads';
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
      .then(({data, errors: newErrors}) => {
        if (data) {
          navigation.replace(ScreenName.AddItemToMenu, {
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
