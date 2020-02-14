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
      template: `<gor-checkbox [backgroundColor]="'gradient'" [size]="'lg'"></gor-checkbox>`
    })
  )
  .add(
    'red background',
    () => ({
      template: `<gor-checkbox [backgroundColor]="'red'" [size]="'lg'"></gor-checkbox>`
    })
  )
  .add(
    'darkblue background',
    () => ({
      template: `<gor-checkbox [backgroundColor]="'darkblue'" [size]="'lg'"></gor-checkbox>`
    })
  )
  .add(
    'blue background',
    () => ({
      template: `<gor-checkbox [backgroundColor]="'blue'" [size]="'lg'"></gor-checkbox>`
    })
  )
  .add(
    'lightblue background',
    () => ({
      template: `<gor-checkbox [backgroundColor]="'lightblue'" [size]="'lg'"></gor-checkbox>`
    })
  )
  .add(
    'pink background',
    () => ({
      template: `<gor-checkbox [backgroundColor]="'pink'" [size]="'lg'"></gor-checkbox>`
    })
  )
  .add(
    'yellow background',
    () => ({
      template: `<gor-checkbox [backgroundColor]="'yellow'" [size]="'lg'"></gor-checkbox>`
    })
  )
  .add(
    'lowercase',
    () => ({
      template: `<gor-checkbox [labelTransform]="'lo'" [size]="'lg'"></gor-checkbox>`
    })
  )
  .add(
    'uppercase',
    () => ({
      template: `<gor-checkbox [labelTransform]="'up'" [size]="'lg'"></gor-checkbox>`
    })
  )
  .add(
    'capitalize',
    () => ({
      template: `<gor-checkbox [labelTransform]="'cp'" [size]="'lg'"></gor-checkbox>`
    })
  )
  .add(
    'none',
    () => ({
      template: `<gor-checkbox [label]="'LaBeL'" [labelTransform]="'no'" [size]="'lg'"></gor-checkbox>`
    })
  )
  .add(
    'dark text',
    () => ({
      template: `<gor-checkbox [textColor]="'dark'" [size]="'lg'"></gor-checkbox>`
    })
  )
  .add(
    'light text',
    () => ({
      template: `<gor-checkbox [textColor]="'light'" [size]="'lg'"></gor-checkbox>`
    })
  )
