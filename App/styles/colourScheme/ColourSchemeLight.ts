import {ColourScheme} from './ColourScheme.type';

export default class ColourSchemeLight implements ColourScheme {
  // Background
  backgroundPrimary = '#fff';
  backgroundSecondary = '#ace6ce';

  // Fonts
  fontPrimary = '#000000';
  fontSecondary = '#fff';

  // Buttons
  buttonPrimary = '#7c8be3';
  buttonSecondary = '#e76c6c';

  // Button fonts
  buttonPrimaryFont = '#fff';
  buttonSecondaryFont = '#fff';

  // Alerts
  alertPrimary = '#7e9ece';
  alertSuccess = '#6fd7a7';
  alertWarning = '#e3cf91';
  alertDanger = '#e5939b';

  // Alert fonts
  alertPrimaryFont = '#0d6efd';
  alertSuccessFont = '#198754';
  alertWarningFont = '#ffc107';
  alertDangerFont = '#dc3545';
}
