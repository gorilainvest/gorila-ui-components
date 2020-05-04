import { moduleMetadata, storiesOf } from '@storybook/angular';
import { utc } from 'moment';

import { MODULE_METADATA } from './datepicker.module';

const today = utc().format('YYYY-MM-DD');

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
  }))
  .add('max date set to today', () => ({
    template: `
    <gor-datepicker-content maxDate='${today}'></gor-datepicker-content>
    `
  }))
  .add('min date set to today', () => ({
    template: `
    <gor-datepicker-content minDate='${today}'></gor-datepicker-content>
    `
  }))
  .add('starting in year-month selection', () => ({
    template: `
    <gor-datepicker-content mode='year-month'></gor-datepicker-content>
    `
  }))
  .add('starting in year-only selection', () => ({
    template: `
    <gor-datepicker-content mode='year-only'></gor-datepicker-content>
    `
  }));
