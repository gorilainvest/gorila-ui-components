import { text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { IconComponent } from './icon.component';
import { ICON_BASE_SRC } from './token';

storiesOf('Icon', module)
  .addDecorator(
    moduleMetadata({
      declarations: [IconComponent],
      providers: [
        { provide: ICON_BASE_SRC, useValue: 'https://s3.amazonaws.com/gorila-images/app/' }
      ]
    })
  )
  .addDecorator(withKnobs)
  .add(
    'playground',
    () => ({
      template: `
      <div>
        <gor-icon
          [secondaryBase]="secondaryBase"
          [iconFolder]="iconFolder"
          [icon]="icon"
          [color]="color"
          [imgFormat]="imgFormat"
        ></gor-icon>
      </div>
      `,
      props: {
        secondaryBase: text('secondaryBase', '/assets/img/'),
        iconFolder: text('iconFolder', 'Chevrons'),
        icon: text('icon', 'Up'),
        color: text('color', ''),
        imgFormat: text('imgFormat', 'svg'),
      }
    })
  )
