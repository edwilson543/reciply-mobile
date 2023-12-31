import {ColourScheme} from './ColourScheme.type';

export default class ColourSchemeLight implements ColourScheme {
  // Background
  backgroundPrimary = '#fff';
  backgroundSecondary = '#6db57d';

  // Fonts
  fontPrimary = '#000000';
  fontSecondary = '#fff';
  fontTertiary = '#6db57d';

  // Buttons
  buttonPrimary = '#000000';
  buttonSecondary = '#cccccc';
  buttonDanger = '#ec4646';

  // Button fonts
  buttonPrimaryFont = '#fff';
  buttonSecondaryFont = '#000000';
  buttonDangerFont = '#ffffff';

  // Alerts
  alertPrimary = '#7e9ece';
  alertSuccess = '#6fd7a7';
  alertWarning = '#e3cf91';
  alertDanger = '#e5939b';

  // Alert fonts
  alertPrimaryFont = '#0d6efd';
  alertSuccessFont = '#198754';
  alertWarningFont = '#ffc107';
  alertDangerFont = '#480308';

  // Miscellaneous form widgets
  textInputFocusBorder = '#2391de';
  tabIconInactive = '#000000';
  tabIconActive = '#dc2830';
}
