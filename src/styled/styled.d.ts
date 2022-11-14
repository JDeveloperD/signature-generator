import 'styled-components';

export type Colors = {
  white: string;
  black: string;
  success: string;
  warning: string;
  danger: string;
  purlple: string;
  orange: string;
  'gray-100': string;
  'gray-200': string;
  'gray-300': string;
  'gray-400': string;
  'gray-500': string;
  'gray-600': string;
  'dark-900': string;
  'dark-800': string;
  gradient: string;
};

export type Color = keyof Colors;

export type ThemeSize = 'sm' | 'md' | 'lg'; // tamaños

export type ThemeMode = 'light' | 'dark'; // modos de tema

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: ThemeMode;
    colors: Colors;
  }
}
