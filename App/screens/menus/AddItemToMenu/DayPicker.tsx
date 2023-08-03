import React from 'react';

import {Picker, PickerProps} from '@react-native-picker/picker';

import {Day} from '../../../services/restAPI/constants';

export default function DayPicker(props: PickerProps) {
  return (
    <Picker {...props}>
      <Picker.Item label={Day[Day.Monday].toString()} value={Day.Monday} />
      <Picker.Item label={Day[Day.Tuesday].toString()} value={Day.Tuesday} />
      <Picker.Item
        label={Day[Day.Wednesday].toString()}
        value={Day.Wednesday}
      />
      <Picker.Item label={Day[Day.Thursday].toString()} value={Day.Thursday} />
      <Picker.Item label={Day[Day.Friday].toString()} value={Day.Friday} />
      <Picker.Item label={Day[Day.Saturday].toString()} value={Day.Saturday} />
      <Picker.Item label={Day[Day.Sunday].toString()} value={Day.Sunday} />
    </Picker>
  );
}
