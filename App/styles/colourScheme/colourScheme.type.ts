export interface ColourScheme {
  // Background colours
  backgroundPrimary: string;
  backgroundSecondary: string;

  // Font colours
  fontPrimary: string;
  fontSecondary: string;
}

export type ColourTheme = 'light' | 'dark' | null;
