import { EnhancedTitleModule } from '@gorilainvest/ui-toolkit/enhanced-title';
import { TooltipModule } from '@gorilainvest/ui-toolkit/tooltip';
import { text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EnhancedHeaderComponent } from './enhanced-header.component';

storiesOf('EnhancedHeader', module)
  .addDecorator(
    moduleMetadata({
      imports: [EnhancedTitleModule, TooltipModule, BrowserAnimationsModule],
      declarations: [EnhancedHeaderComponent]
    })
  )
  .addDecorator(withKnobs)
  .add('with tooltip icon', () => ({
    template: `
      <gor-enhanced-header
        [title]="title"
        [highlight]="highlight"
        [description]="description"
        [description2]="description2"
        [tooltipText]="tooltipText"></gor-enhanced-header>
    `,
    props: {
      title: text('title', 'Enhanced'),
      highlight: text('highlight', 'header'),
      description: text('description', 'Main description.'),
      description2: text('description2', 'Secondary description.'),
      tooltipText: text('tooltipText', 'Tooltip text')
    }
  }))
  .add('without tooltip icon', () => ({
    template: `
      <gor-enhanced-header
        [title]="title"
        [highlight]="highlight"
        [description]="description"
        [description2]="description2"></gor-enhanced-header>
    `,
    props: {
      title: text('title', 'Enhanced'),
      highlight: text('highlight', 'header'),
      description: text('description', 'Main description.'),
      description2: text('description2', 'Secondary description.')
    }
  }))
