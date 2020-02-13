import { storiesOf, moduleMetadata } from '@storybook/angular';
import { CheckboxComponent } from './checkbox.component';

storiesOf('Checkbox', module)
  .addDecorator(
    moduleMetadata({
      declarations: [CheckboxComponent]
    })
  )
  .add(
    'playground',
    () => ({
      template: `<gor-checkbox></gor-checkbox>`
    })
  )
