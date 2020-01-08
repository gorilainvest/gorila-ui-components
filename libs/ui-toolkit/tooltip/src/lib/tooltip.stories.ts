import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { text, withKnobs } from '@storybook/addon-knobs';

import { TooltipComponent } from './tooltip.component';

storiesOf('Tooltip', module)
  .addDecorator(
    moduleMetadata({
      imports: [MatTooltipModule, BrowserAnimationsModule],
      declarations: [TooltipComponent]
    })
  )
  .add(
    'default',
    () => ({
      template: `
        <div>
          <gor-tooltip [tooltipText]="'Gorila Tooltip'"></gor-tooltip>
        </div>
      `
    })
  )
  .add(
    'with above orientation',
    () => ({
      template: `
        <div>
          <gor-tooltip [tooltipText]="'Gorila Tooltip'" [orientation]="'above'"></gor-tooltip>
        </div>
      `
    })
  )
  .add(
    'with below orientation',
    () => ({
      template: `
        <div>
          <gor-tooltip [tooltipText]="'Gorila Tooltip'" [orientation]="'below'"></gor-tooltip>
        </div>
      `
    })
  )
  .add(
    'with left orientation',
    () => ({
      template: `
        <div>
          <gor-tooltip [tooltipText]="'Gorila Tooltip'" [orientation]="'left'"></gor-tooltip>
        </div>
      `
    })
  )
  .add(
    'with before orientation',
    () => ({
      template: `
        <div>
          <gor-tooltip [tooltipText]="'Gorila Tooltip'" [orientation]="'before'"></gor-tooltip>
        </div>
      `
    })
  )
  .add(
    'with after orientation',
    () => ({
      template: `
        <div>
          <gor-tooltip [tooltipText]="'Gorila Tooltip'" [orientation]="'after'"></gor-tooltip>
        </div>
      `
    })
  )
