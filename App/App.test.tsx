import 'react-native';
import React from 'react';
import App from './App';

import {render, act} from '@testing-library/react-native';

test('app renders', async () => {
  await act(() => render(<App />));
});
