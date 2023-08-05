import React from 'react';

import {bootstrap, TextStyled} from '../../../components/styled';

type MenuDetailsFooter = {
  hasItems: boolean;
};

export default function MenuDetailsFooter({hasItems}: MenuDetailsFooter) {
  if (hasItems) {
    return <></>;
  } else {
    return (
      <TextStyled style={bootstrap.my5}>
        This menu currently has no recipes
      </TextStyled>
    );
  }
}
