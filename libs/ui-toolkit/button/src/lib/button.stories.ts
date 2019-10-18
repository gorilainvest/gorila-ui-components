import { action } from '@storybook/addon-actions';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const modMetadata = moduleMetadata({
  declarations: [ButtonComponent]
});

storiesOf('Button with text', module)
  .addDecorator(modMetadata)
  .add('Green enabled button', () => ({
    template: `
      <mag-button btnType="green" [disabled]="false">
        I am a green button
      </mag-button>
    `
  }))
  .add('Gray enabled button', () => ({
    template: `
      <mag-button btnType="gray" [disabled]="false">
        I am a glay button
      </mag-button>
    `
  }))
  .add('Green disabled button', () => ({
    template: `
      <mag-button btnType="green" [disabled]="true">
        Don't click me
      </mag-button>
    `
  }))
  .add('Gray disabled button', () => ({
    template: `
      <mag-button btnType="gray" [disabled]="true">
        Please, go away!
      </mag-button>
    `
  }));

storiesOf('Button with emojis', module)
  .addDecorator(modMetadata)
  .add('Green enabled button', () => ({
    template: `
      <mag-button btnType="green" [disabled]="false">
        💶 💹 🐾 🔵
      </mag-button>
    `
  }))
  .add('Gray enabled button', () => ({
    template: `
      <mag-button btnType="gray" [disabled]="false">
        📧 📧 👂 ⚙
      </mag-button>
    `
  }))
  .add('Green disabled button', () => ({
    template: `
      <mag-button btnType="green" [disabled]="true">
        ↘️ 😡 🎢 📳
      </mag-button>
    `
  }))
  .add('Gray disabled button', () => ({
    template: `
      <mag-button btnType="gray" [disabled]="true">
        📣 🔦 🆙 😽
      </mag-button>
    `
  }));

storiesOf('Button clickable', module)
  .addDecorator(modMetadata)
  .add('Simple button', () => ({
    props: {
      onClick: () => {
        action('log')('That was a good click');
      }
    },
    template: `
      <mag-button btnType="green" (click)="onClick()">
        Click me
      </mag-button>
    `
  }))
  .add('Emoji button', () => ({
    props: {
      onClick: () => {
        action('log')('😷 💁 💔 🛏');
      }
    },
    template: `
      <mag-button btnType="green" (click)="onClick()">
        🕦 👻 🌘 ♎️
      </mag-button>
    `
  }));
