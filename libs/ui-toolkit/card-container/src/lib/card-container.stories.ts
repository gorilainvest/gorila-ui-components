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
    }`,
  `
.dummy-container {
    background: #ccc;
    height: calc(100% - 25px);
    padding: 10px 0;
}`,
  `
.dummy-content {
    border: 3px dashed #444;
    border-radius: 10px;
    color: #444;
    height: 100%;
    width: calc(100% - 20px);
}`,
  `
.dummy-container,
.dummy-content {
    align-items: center;
    display: flex;
    justify-content: center;
}
`,
  `gor-card-container {
    background: #fff;
    display: block;
    width: 300px;
    margin: 10px;
}`
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
        <gor-card-container title="This is a sample" colorInit="#10c0c6" colorEnd="#4dde90">
            ${content}
        </gor-card-container>
        <gor-card-container title="This is a sample" colorInit="#10c0c6" colorEnd="#4dde90" subtitle="with a subtitle">
            ${content}
        </gor-card-container>
        `
  }))
  .add('editable', () => ({
    props: {
      title: text('title', 'This is a sample'),
      colorInit: text('colorInit', '#10c0c6'),
      colorEnd: text('colorEnd', '#4dde90'),
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
        colorInit="#10c0c6"
        colorEnd="#4dde90"
        subtitle="Subtitle"
        contentTitle="Content Title"
      >
        ${content}
      </gor-card-container>
    `
  }));
