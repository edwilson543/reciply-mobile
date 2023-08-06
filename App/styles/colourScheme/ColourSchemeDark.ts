import {ColourScheme} from './ColourScheme.type';

export default class ColourSchemeDark implements ColourScheme {
  // Background
  backgroundPrimary = '#000000';
  backgroundSecondary = '#173428';

  // Fonts
  fontPrimary = '#fff';
  fontSecondary = '#000000';
  fontTertiary = '#ace6ce';

  // Buttons
  buttonPrimary = '#7c8be3';
  buttonSecondary = '#e76c6c';
  buttonDanger = '#9b0000';

  // Button fonts
  buttonPrimaryFont = '#fff';
  buttonSecondaryFont = '#fff';
  buttonDangerFont = '#fff';

  // Alerts
  alertPrimary = '#0d6efd';
  alertSuccess = '#198754';
  alertWarning = '#ffc107';
  alertDanger = '#dc3545';

  // Alert fonts
  alertPrimaryFont = '#0d6efd';
  alertSuccessFont = '#198754';
  alertWarningFont = '#ffc107';
  alertDangerFont = '#dc3545';

  // Miscellaneous form widgets
  textInputFocusBorder = '#2391de';
  tabIconInactive = '#000000';
  tabIconActive = '#dc2830';
}
