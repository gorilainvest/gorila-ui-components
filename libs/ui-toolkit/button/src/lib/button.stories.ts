import { action } from '@storybook/addon-actions';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const modMetadata = moduleMetadata({
  declarations: [ButtonComponent]
});

storiesOf('Button', module)
  .addDecorator(modMetadata)
  .add('Green enabled button', () => ({
    props: {
      onClick: () => {
        action('log')('That was a good click');
      }
    },
    template: `
      <mag-button btnType="green" [disabled]="false" (click)="onClick()">
        I am a green button
      </mag-button>
      <mag-button btnType="gray" [disabled]="false" (click)="onClick()">
        I am a gray button
      </mag-button>
      <mag-button btnType="green" [disabled]="true">
        Don't click me
      </mag-button>
      <mag-button btnType="gray" [disabled]="true">
        Please, go away!
      </mag-button>
    `
  }));
  