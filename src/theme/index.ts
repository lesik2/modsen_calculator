import { configureFonts, MD3LightTheme as DefaultTheme } from 'react-native-paper';
import { MD3Type } from 'react-native-paper/lib/typescript/types';

const fontConfig: Record<string, MD3Type> = {
  headlineSmall: {
    fontFamily: 'Poppins-Regular',
    fontSize: 24,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 36,
  },
  titleLarge: {
    fontFamily: 'Poppins-Regular',
    fontSize: 24,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 36,
  },
  displayMedium: {
    fontFamily: 'Poppins-Regular',
    fontSize: 48,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 72,
  },
  labelLarge: {
    fontFamily: 'Poppins-Regular',
    fontSize: 32,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 48,
  },
};

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#109DFF',
    secondary: '#858585',
    tertiary: '#424242',
    white: '#ffffff',
    black: '#000000',
  },
  fonts: configureFonts({ config: fontConfig }),
};

export type AppTheme = typeof theme;
