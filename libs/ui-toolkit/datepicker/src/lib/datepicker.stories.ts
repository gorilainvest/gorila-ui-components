import { MatDatepickerModule } from '@angular/material/datepicker';
import { date, select, text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { utc } from 'moment';

import { DatepickerModule } from './datepicker.module';

const today = utc().format('YYYY-MM-DD');

storiesOf('DatepickerContent', module)
  .addDecorator(
    moduleMetadata({
      imports: [DatepickerModule, MatDatepickerModule],
    })
  )
  .addDecorator(withKnobs)
  .add('starting in month view', () => ({
    template: `
    <gor-datepicker-content startView='month'></gor-datepicker-content>
    `,
  }))
  .add('starting in multi-year view', () => ({
    template: `
    <gor-datepicker-content startView='multi-year'></gor-datepicker-content>
    `,
  }))
  .add('starting in year view', () => ({
    template: `
    <gor-datepicker-content startView='year'></gor-datepicker-content>
    `,
  }))
  .add('max date set to today', () => ({
    template: `
    <gor-datepicker-content maxDate='${today}'></gor-datepicker-content>
    `,
  }))
  .add('min date set to today', () => ({
    template: `
    <gor-datepicker-content minDate='${today}'></gor-datepicker-content>
    `,
  }))
  .add('starting in year-month selection', () => ({
    template: `
    <gor-datepicker-content mode='year-month'></gor-datepicker-content>
    `,
  }))
  .add('starting in year-only selection', () => ({
    template: `
    <gor-datepicker-content mode='year-only'></gor-datepicker-content>
    `,
  }))
  .add('playground', () => ({
    template: `
    <gor-datepicker-content mode='year-only'></gor-datepicker-content>
    `,
    props: {
      applyText: text('applyText', 'Apply'),
      mode: select('mode', ['all', 'year-only', 'year'], 'year-only'),
      maxDate: date('maxDate', new Date('2025-01-01')),
      minDate: date('minDate', new Date('2015-01-01')),
      startAt: date('startAt'),
      startView: select('startView', ['multi-year', 'month', 'year'], 'month'),
    },
  }));


storiesOf('Datepicker', module)
  .addDecorator(
    moduleMetadata({
      imports: [DatepickerModule, MatDatepickerModule],
    })
  )
  .add('starting in year-only selection', () => ({
    template: `
    <input matInput [matDatepicker]='gdp' placeholder="Choose a date">
    <gor-datepicker-toggle matSuffix
      [activeOnSelect]="false"
      [for]="gdp"></gor-datepicker-toggle>
    <gor-datepicker #gdp
      maxDate="2020-05-15"
      minDate="2019-05-02"
      mode='year-only'
    ></gor-datepicker>
    `,
  }))
  .add('starting in year-month selection', () => ({
    template: `
    <input matInput [matDatepicker]='gdp' placeholder="Choose a date">
    <gor-datepicker-toggle matSuffix
      [activeOnSelect]="false"
      [for]="gdp"></gor-datepicker-toggle>
    <gor-datepicker #gdp
      maxDate="2020-05-15"
      minDate="2019-05-02"
      mode='year-month'
    ></gor-datepicker>
    `,
  }))
  .add('starting in all selection', () => ({
    template: `
    <input matInput [matDatepicker]='gdp' placeholder="Choose a date">
    <gor-datepicker-toggle matSuffix
      [activeOnSelect]="false"
      [for]="gdp"></gor-datepicker-toggle>
    <gor-datepicker #gdp
      maxDate="2020-05-15"
      minDate="2019-05-02"
      mode='all'
    ></gor-datepicker>
    `,
  }));
