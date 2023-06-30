import 'react-native';
import React from 'react';
import App from './App';

import {act} from '@testing-library/react-native';
import renderer from 'react-test-renderer';

test('app renders', async () => {
  jest.useFakeTimers();
  await act(async () => renderer.create(<App />));
});
