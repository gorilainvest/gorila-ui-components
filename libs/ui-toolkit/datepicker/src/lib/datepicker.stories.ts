import { MODULE_METADATA } from './datepicker.module';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { DatepickerComponent } from './datepicker.component';

storiesOf('Datepicker', module)
  .addDecorator(moduleMetadata(MODULE_METADATA))
  .add('dafault view', () => ({
    template: `
    <gor-datepicker></gor-datepicker>
    `
  }));
