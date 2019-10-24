import { storiesOf } from '@storybook/angular';
import { ArrowVariationComponent } from './arrow-variation.component';

const conf = { centered: { disable: true } };

storiesOf('Arrow Variation small', module)
  .add(
    'with negative value',
    () => ({
      component: ArrowVariationComponent,
      props: {
        size: 'sm',
        value: -1
      }
    }),
    conf
  )
  .add(
    'with zero value',
    () => ({
      component: ArrowVariationComponent,
      props: {
        size: 'sm',
        value: 0
      }
    }),
    conf
  )
  .add(
    'with positive value',
    () => ({
      component: ArrowVariationComponent,
      props: {
        size: 'sm',
        value: 1
      }
    }),
    conf
  );

storiesOf('Arrow Variation medium', module)
  .add(
    'with negative value',
    () => ({
      component: ArrowVariationComponent,
      props: {
        size: 'md',
        value: -1
      }
    }),
    conf
  )
  .add(
    'with zero value',
    () => ({
      component: ArrowVariationComponent,
      props: {
        size: 'md',
        value: 0
      }
    }),
    conf
  )
  .add(
    'with positive value',
    () => ({
      component: ArrowVariationComponent,
      props: {
        size: 'md',
        value: 1
      }
    }),
    conf
  );

storiesOf('Arrow Variation large', module)
  .add(
    'with negative value',
    () => ({
      component: ArrowVariationComponent,
      props: {
        size: 'lg',
        value: -1
      }
    }),
    conf
  )
  .add(
    'with zero value',
    () => ({
      component: ArrowVariationComponent,
      props: {
        size: 'lg',
        value: 0
      }
    }),
    conf
  )
  .add(
    'with positive value',
    () => ({
      component: ArrowVariationComponent,
      props: {
        size: 'lg',
        value: 1
      }
    }),
    conf
  );
