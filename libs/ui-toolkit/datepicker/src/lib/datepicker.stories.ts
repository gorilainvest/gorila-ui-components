import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { DatepickerModule } from './datepicker.module';

storiesOf('Datepicker', module)
  .addDecorator(
    moduleMetadata({
      imports: [CommonModule, NoopAnimationsModule, DatepickerModule, MatDatepickerModule],
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
