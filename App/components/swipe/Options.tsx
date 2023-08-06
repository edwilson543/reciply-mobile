import React from 'react';

import {IconDefinition} from '@fortawesome/free-brands-svg-icons';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {StyleSheet, Pressable} from 'react-native';

import {ColourScheme, useColourScheme} from '../../styles/colourScheme';
import {FontSize} from '../../styles/constants';
import {TextStyled} from '../styled';

export type DeleteSwipeOptionProps = {
  onDelete: () => void;
  faIcon?: IconDefinition;
  text?: string;
};

export default function DeleteSwipeOption({
  onDelete,
  faIcon,
  text,
}: DeleteSwipeOptionProps) {
  const colourScheme = useColourScheme();
  const styleSheet = styles(colourScheme);

  const actionText = text ?? 'delete';
  const actionIcon = faIcon ?? faTrash;

  return (
    <Pressable onPress={onDelete} style={styleSheet.iconContainer}>
      <FontAwesomeIcon
        icon={actionIcon}
        color={colourScheme.buttonDangerFont}
        size={FontSize.TextLarge}
      />
      <TextStyled style={styleSheet.iconText}>{actionText}</TextStyled>
    </Pressable>
  );
}

const styles = (colourScheme: ColourScheme) =>
  StyleSheet.create({
    iconContainer: {
      // Display
      flex: 1,
      width: 75,
      alignItems: 'center',
      justifyContent: 'space-around',
      // Background
      backgroundColor: colourScheme.buttonDanger,
    },
    iconText: {
      fontSize: FontSize.TextSmall,
      color: colourScheme.buttonDangerFont,
    },
  });
