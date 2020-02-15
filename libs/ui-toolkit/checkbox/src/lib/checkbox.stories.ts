import { storiesOf, moduleMetadata } from '@storybook/angular';
import { CheckboxModule } from './checkbox.module';

storiesOf('Checkbox', module)
  .addDecorator(
    moduleMetadata({
      imports: [CheckboxModule]
    })
  )
  .add(
    'gradient background',
    () => ({
      template: `<gor-checkbox [backgroundColor]="'gradient'" [size]="'lg'" [checked]="true"></gor-checkbox>`
    })
  )
  .add(
    'red background',
    () => ({
      template: `<gor-checkbox [backgroundColor]="'red'" [size]="'lg'" [checked]="true"></gor-checkbox>`
    })
  )
  .add(
    'darkblue background',
    () => ({
      template: `<gor-checkbox [backgroundColor]="'darkblue'" [size]="'lg'" [checked]="true"></gor-checkbox>`
    })
  )
  .add(
    'blue background',
    () => ({
      template: `<gor-checkbox [backgroundColor]="'blue'" [size]="'lg'" [checked]="true"></gor-checkbox>`
    })
  )
  .add(
    'lightblue background',
    () => ({
      template: `<gor-checkbox [backgroundColor]="'lightblue'" [size]="'lg'" [checked]="true"></gor-checkbox>`
    })
  )
  .add(
    'pink background',
    () => ({
      template: `<gor-checkbox [backgroundColor]="'pink'" [size]="'lg'" [checked]="true"></gor-checkbox>`
    })
  )
  .add(
    'yellow background',
    () => ({
      template: `<gor-checkbox [backgroundColor]="'yellow'" [size]="'lg'" [checked]="true"></gor-checkbox>`
    })
  )
  .add(
    'lowercase',
    () => ({
      template: `<gor-checkbox [labelTransform]="'lo'" [size]="'lg'" [checked]="true"></gor-checkbox>`
    })
  )
  .add(
    'uppercase',
    () => ({
      template: `<gor-checkbox [labelTransform]="'up'" [size]="'lg'" [checked]="true"></gor-checkbox>`
    })
  )
  .add(
    'capitalize',
    () => ({
      template: `<gor-checkbox [labelTransform]="'cp'" [size]="'lg'" [checked]="true"></gor-checkbox>`
    })
  )
  .add(
    'none',
    () => ({
      template: `<gor-checkbox [label]="'LaBeL'" [labelTransform]="'no'" [size]="'lg'" [checked]="true"></gor-checkbox>`
    })
  )
  .add(
    'dark text',
    () => ({
      template: `<gor-checkbox [textColor]="'dark'" [size]="'lg'" [checked]="true"></gor-checkbox>`
    })
  )
  .add(
    'light text',
    () => ({
      template: `<gor-checkbox [textColor]="'light'" [size]="'lg'" [checked]="true"></gor-checkbox>`
    })
  )
  .add(
    'small',
    () => ({
      template: `<gor-checkbox [size]="'sm'" [checked]="true"></gor-checkbox>`
    })
  )
  .add(
    'medium',
    () => ({
      template: `<gor-checkbox [size]="'md'" [checked]="true"></gor-checkbox>`
    })
  )
  .add(
    'large',
    () => ({
      template: `<gor-checkbox [size]="'lg'" [checked]="true"></gor-checkbox>`
    })
  )
