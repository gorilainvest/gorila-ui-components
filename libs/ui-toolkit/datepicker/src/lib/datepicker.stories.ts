import { storiesOf, moduleMetadata } from '@storybook/angular';

import { MODULE_METADATA } from './datepicker.module';

storiesOf('Datepicker', module)
  .addDecorator(moduleMetadata(MODULE_METADATA))
  .add('starting in month view', () => ({
    template: `
    <gor-datepicker startView='month'></gor-datepicker>
    `
  }))
  .add('starting in multi-year view', () => ({
    template: `
    <gor-datepicker startView='multi-year'></gor-datepicker>
    `
  }))
  .add('starting in year view', () => ({
    template: `
    <gor-datepicker startView='year'></gor-datepicker>
    `
  }));
