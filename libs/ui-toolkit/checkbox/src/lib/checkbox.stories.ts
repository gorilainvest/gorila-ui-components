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
        <gor-checkbox [size]="'sm'" [labelTransform]="'up'" [backgroundColor]="'red'" [checked]="true"></gor-checkbox>
        <gor-checkbox [size]="'sm'" [labelTransform]="'up'" [backgroundColor]="'darkblue'" [checked]="true"></gor-checkbox>
        <gor-checkbox [size]="'sm'" [labelTransform]="'up'" [backgroundColor]="'blue'" [checked]="true"></gor-checkbox>
        <gor-checkbox [size]="'sm'" [labelTransform]="'up'" [backgroundColor]="'lightblue'" [checked]="true"></gor-checkbox>
        <gor-checkbox [size]="'md'" [labelTransform]="'lo'" [textColor]="'light'" [backgroundColor]="'pink'" [checked]="true"></gor-checkbox>
        <gor-checkbox [size]="'lg'" [labelTransform]="'cp'" [backgroundColor]="'yellow'" [checked]="true"></gor-checkbox>
        <gor-checkbox [size]="'lg'" [labelTransform]="'no'" [label]="'LaBeL'" [textColor]="'light'" [backgroundColor]="'gradient'"  [checked]="true"></gor-checkbox>
      </div>
      `
    })
  )
