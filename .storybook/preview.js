import '!style-loader!css-loader!sass-loader!../libs/shared-styles/_globals.scss';

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addParameters } from '@storybook/angular';

addParameters({
  layout: 'centered',
  backgrounds: {
    default: 'Light Mode',
    values: [
      { name: 'Light Mode', value: '#f1f1f1' },
      { name: 'Dark Mode', value: '#22313f' },
      { name: 'Default Theme', value: '#10c0c6' },
      { name: 'Cash Theme', value: '#314a61' },
      { name: 'Currency Theme', value: '#fcbd1f', default: true },
      { name: 'Fixed Income Theme', value: '#815ae8' },
      { name: 'Multimarket Theme', value: '#0dd6f4' },
      { name: 'Stocks Theme', value: '#ed4581' },
    ],
  },
  viewport: {
    viewports: [
      {
        name: 'Responsive',
        styles: { width: '100%', height: '100%' },
        type: 'desktop',
      },
      INITIAL_VIEWPORTS.iphone5,
      INITIAL_VIEWPORTS.iphonex,
      INITIAL_VIEWPORTS.ipad,
      INITIAL_VIEWPORTS.ipad12p,
      INITIAL_VIEWPORTS.pixel,
      INITIAL_VIEWPORTS.pixelxl,
    ],
  },
});
