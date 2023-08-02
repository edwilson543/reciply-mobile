import React from 'react';

import MenuDetailsView from './MenuDetailsView';
import {MenuDetailsProps} from '../../../navigation/authenticated/navigation.types';
import {useMenuDetails} from '../../../services/restAPI/requests/menus';

export function MenuDetails({route}: MenuDetailsProps) {
  /** Show the details of a single menu. */
  const {data, isLoading} = useMenuDetails(route.params.menuId);

  return <MenuDetailsView menu={data} isLoading={isLoading} />;
}
