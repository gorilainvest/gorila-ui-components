import { storiesOf, moduleMetadata } from '@storybook/angular';
import { ArrowVariationComponent } from './arrow-variation.component';

const conf = { centered: { disable: false } };
const arrowDivStyle = `
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const containerStyle = `
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;

storiesOf('Arrow Variation', module)
  .addDecorator(
    moduleMetadata({
      declarations: [ArrowVariationComponent]
    })
  )
  .add(
    'sizes with positive values',
    () => ({
      template: `
      <div style="${containerStyle}">
        <div style="${arrowDivStyle}">
          <gor-arrow-variation size='sm' [value]="1" [pdfPrint]="true"></gor-arrow-variation>
          Small
        </div>
        <div style="${arrowDivStyle}">
          <gor-arrow-variation size='md' [value]="1" [pdfPrint]="true"></gor-arrow-variation>
          Medium
        </div>
        <div style="${arrowDivStyle}">
          <gor-arrow-variation size='lg' [value]="1" [pdfPrint]="true"></gor-arrow-variation>
          Large
        </div>
      </div>
    `
    }),
    conf
  )
  .add(
    'sizes with negative values',
    () => ({
      template: `
      <div style="${containerStyle}">
        <div style="${arrowDivStyle}">
          <gor-arrow-variation size='sm' [value]="-1" [pdfPrint]="true"></gor-arrow-variation>
          Small
        </div>
        <div style="${arrowDivStyle}">
          <gor-arrow-variation size='md' [value]="-1" [pdfPrint]="true"></gor-arrow-variation>
          Medium
        </div>
        <div style="${arrowDivStyle}">
          <gor-arrow-variation size='lg' [value]="-1" [pdfPrint]="true"></gor-arrow-variation>
          Large
        </div>
      </div>
    `
    }),
    conf
  );
