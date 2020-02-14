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
        <gor-checkbox [size]="'sm'" [labelTransform]="'up'"></gor-checkbox>
        <gor-checkbox [size]="'md'" [labelTransform]="'lo'" [textColor]="'light'"></gor-checkbox>
        <gor-checkbox [size]="'lg'" [labelTransform]="'cp'"></gor-checkbox>
        <gor-checkbox [size]="'lg'" [labelTransform]="'no'" [label]="'LaBeL'" [textColor]="'light'"></gor-checkbox>
      </div>
      `
    })
  )
