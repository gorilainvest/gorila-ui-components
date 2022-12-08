import { create } from '@storybook/theming';

const gorilaTheme = create({
  base: 'light',

  colorPrimary: '#3366FF',
  colorSecondary: '#4dde90',

  // UI
  appBg: '#ffffff',
  appContentBg: '#f1f1f1',
  appBorderColor: '#2d2d2d',
  appBorderRadius: 4,

  // Typography
  fontBase: 'Lato, open-sans',
  fontCode: 'monospace',

  // Text colors
  textColor: '#555b5b',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#555b5b',
  barSelectedColor: '#3366FF',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#cacbcc',
  inputTextColor: '#555b5b',
  inputBorderRadius: 4,

  brandTitle: 'Gorila UI-Toolkit Storybook',
  brandUrl: 'https://gorila.com.br',
});;
export default gorilaTheme;
