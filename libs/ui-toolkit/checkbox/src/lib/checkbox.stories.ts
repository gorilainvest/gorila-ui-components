import { storiesOf, moduleMetadata } from '@storybook/angular';
import { CheckboxModule } from './checkbox.module';

storiesOf('Checkbox', module)
  .addDecorator(
    moduleMetadata({
      imports: [CheckboxModule]
    })
  )
  .add(
    'playground',
    () => ({
      template: `
      <div style="display: flex; flex-direction: column;">
        <gor-checkbox [size]="'sm'" [labelCapitalization]="'lo'"></gor-checkbox>
        <gor-checkbox [size]="'md'" [labelCapitalization]="'cp'"></gor-checkbox>
        <gor-checkbox [size]="'lg'" [labelCapitalization]="'up'"></gor-checkbox>
      </div>
      `
    })
  )
