import { storiesOf, moduleMetadata } from '@storybook/angular';
import { text, withKnobs } from '@storybook/addon-knobs';

import { CardContainerModule } from './card-container.module';

const content = `
<ng-container body>
    <div class="dummy-container">
        <div class="dummy-content">
            Your content here
        </div>
    </div>
</ng-container>
`;

const styles = [
  `
    ::ng-deep .card-container {
        padding: 0;
    }
  `,
  `
    .dummy-container {
        background: #ccc;
        height: calc(100% - 25px);
        padding: 10px 0;
    }
  `,
  `
    .dummy-content {
        border: 3px dashed #444;
        border-radius: 10px;
        color: #444;
        height: 100%;
        width: calc(100% - 20px);
    }
  `,
  `
    .dummy-container,
    .dummy-content {
        align-items: center;
        display: flex;
        justify-content: center;
    }
  `,
  `
    gor-card-container {
      background: #fff;
      display: block;
      width: 300px;
      margin: 10px;
    }
  `,
  `
    ::ng-deep .empty-card {
      background-color: red !important;
    }
  `
];

const modMetadata = moduleMetadata({
  imports: [CardContainerModule]
});

storiesOf('Card Container', module)
  .addDecorator(modMetadata)
  .addDecorator(withKnobs)
  .add('non-editable', () => ({
    styles,
    template: `
        <gor-card-container title="This is a sample">
            ${content}
        </gor-card-container>
        <gor-card-container title="This is a sample" colorInit="#3366FF" colorEnd="#3366FF">
            ${content}
        </gor-card-container>
        <gor-card-container title="This is a sample" colorInit="#3366FF" colorEnd="#3366FF" subtitle="with a subtitle">
            ${content}
        </gor-card-container>
        `
  }))
  .add('editable', () => ({
    props: {
      title: text('title', 'This is a sample'),
      colorInit: text('colorInit', '#3366FF'),
      colorEnd: text('colorEnd', '#3366FF'),
      subtitle: text('subtitle', 'with a subtitle')
    },
    styles,
    template: `
      <gor-card-container [title]="title" [colorInit]="colorInit" [colorEnd]="colorEnd" [subtitle]="subtitle">
        ${content}
      </gor-card-container>
    `
  }))
  .add('with content title', () => ({
    styles,
    template: `
      <gor-card-container
        title="Title"
        colorInit="#3366FF"
        colorEnd="#3366FF"
        contentTitle="Content Title"
      >
        ${content}
      </gor-card-container>
    `
  }))
  .add('without border', () => ({
    styles,
    template: `
      <gor-card-container
        title="Title"
        contentTitle="Content Title"
        [enableBorder]="false"
      >
        ${content}
      </gor-card-container>
    `
  }))
  .add('with shadow', () => ({
    styles,
    template: `
      <gor-card-container
        colorInit="#3366FF"
        colorEnd="#3366FF"
        [displayShadow]="true"
      >
        ${content}
      </gor-card-container>
    `
  }));
