import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';
import { useColorScheme } from 'react-native';

const customLightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#6B4EFF',
    primaryContainer: '#E6DEFF',
    secondary: '#FF6B9D',
    secondaryContainer: '#FFE6F0',
    tertiary: '#4ECDC4',
    tertiaryContainer: '#E6FFFE',
    surface: '#FFFFFF',
    surfaceVariant: '#F5F5F5',
    background: '#FAFAFA',
    error: '#FF5449',
    onPrimary: '#FFFFFF',
    onSecondary: '#FFFFFF',
    onBackground: '#1C1B1F',
    onSurface: '#1C1B1F',
  },
};

const customDarkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#8B6EFF',
    primaryContainer: '#4A3A9E',
    secondary: '#FF8BB5',
    secondaryContainer: '#B8477A',
    tertiary: '#6EE6DD',
    tertiaryContainer: '#2E9B95',
    surface: '#1C1B1F',
    surfaceVariant: '#2B2B2F',
    background: '#141218',
    error: '#FF6B6B',
    onPrimary: '#FFFFFF',
    onSecondary: '#FFFFFF',
    onBackground: '#E6E1E5',
    onSurface: '#E6E1E5',
  },
};

export const theme = customLightTheme;
export const darkTheme = customDarkTheme;