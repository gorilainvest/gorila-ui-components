export interface Theme {
  accent: string;
  isDefault?: boolean;
  name: string;
  primary: string;
}

export type Themes = Theme[];

export const THEMES: Themes = [
  {
    primary: '#3366FF',
    accent: '#5ce385',
    name: 'portfolio',
    isDefault: true
  },
  {
    primary: '#314a61',
    accent: '#456888',
    name: 'asset-cash-theme'
  },
  {
    primary: '#fcbd1f',
    accent: '#ffd364',
    name: 'asset-currency-theme'
  },
  {
    primary: '#815ae7',
    accent: '#9278f4',
    name: 'asset-fixed_income-theme'
  },
  {
    primary: '#0dd6f4',
    accent: '#43e7ff',
    name: 'asset-multimarket-theme'
  },
  {
    primary: '#ed4581',
    accent: '#f766a0',
    name: 'asset-stocks-theme'
  }
];

