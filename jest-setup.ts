// Import Jest Native matchers
import '@testing-library/jest-native/extend-expect';
import * as storage from './App/services/storage';

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// Mock out dependencies causing configuration issues with jest
jest.mock('react-native-image-picker', () => '');
jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}));

// Cleanup that runs after each test
afterEach(() => storage.deleteValueForKey(storage.StorageKey.AuthToken));
