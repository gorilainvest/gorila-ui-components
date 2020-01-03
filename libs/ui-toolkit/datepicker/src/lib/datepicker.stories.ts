import { storiesOf, moduleMetadata } from '@storybook/angular';

import { MODULE_METADATA } from './datepicker.module';

storiesOf('Datepicker', module)
  .addDecorator(moduleMetadata(MODULE_METADATA))
  .add('starting in month view', () => ({
    template: `
    <gor-datepicker-content startView='month'></gor-datepicker-content>
    `
  }))
  .add('starting in multi-year view', () => ({
    template: `
    <gor-datepicker-content startView='multi-year'></gor-datepicker-content>
    `
  }))
  .add('starting in year view', () => ({
    template: `
    <gor-datepicker-content startView='year'></gor-datepicker-content>
    `
  }));
