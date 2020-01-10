import { object, text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { LetterheadFooterComponent } from './footer/footer.component';
import { LetterheadHeaderComponent } from './header/header.component';
import { LetterheadComponent } from './letterhead.component';

storiesOf('Letterhead', module)
  .addDecorator(
    moduleMetadata({
      declarations: [LetterheadComponent, LetterheadFooterComponent, LetterheadHeaderComponent]
    })
  )
  .addDecorator(withKnobs)
  .add(
    'header without label',
    () => ({
      template: `
      <div style="width: 1200px; heigth: 300px; background-color: #fff; box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);">
        <gor-letterhead
          [headerRightMain]="headerRightMain"
          [headerRightSub]="headerRightSub"
          [footerLeftMain]="footerLeftMain"
          [footerLeftSub]="footerLeftSub"
          [footerMiddleMain]="footerMiddleMain"
          [footerMiddleSub]="footerMiddleSub"
          [landingPageUrl]="landingPageUrl"
          [printLogoUrl]="'http://gorilainvest.com.br/assets/img/logo.svg'"
          [displayLogoUrl]="'http://gorilainvest.com.br/assets/img/logo.svg'">
          <div gorLogo style="width: 300px; height: 100px;">
            <img src="http://gorilainvest.com.br/assets/img/logo.svg">
          </div>
          <section letterheadSubheader style="text-align: center;">This is the subheader section</section>
          <section letterheadBody style="text-align: center;">This is the body section</section>
        </gor-letterhead>
      </div>
      `,
      props: {
        isPrinting: false,
        headerIconList: [],
        headerRightMain: text('headerRightMain', 'Main header'),
        headerRightSub: text('headerRightSub', 'Right subheader'),
        footerLeftMain: text('footerLeftMain', 'Footer main'),
        footerLeftSub: text('footerLeftSub', 'Footer sub'),
        footerMiddleMain: text('footerMiddleMain', 'Footer middle main'),
        footerMiddleSub: text('footerMiddleSub', 'Footer middle sub'),
        landingPageUrl: text('landingPageUrl', 'gorila.com.br'),
      }
    })
  )
  .add(
    'header with label',
    () => ({
      template: `
      <div style="width: 1200px; heigth: 300px; background-color: #fff; box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);">
        <gor-letterhead
          [headerRightMain]="headerRightMain"
          [headerRightSub]="headerRightSub"
          [footerLeftMain]="footerLeftMain"
          [footerLeftSub]="footerLeftSub"
          [footerMiddleMain]="footerMiddleMain"
          [footerMiddleSub]="footerMiddleSub"
          [landingPageUrl]="landingPageUrl"
          [printLogoUrl]="'http://gorilainvest.com.br/assets/img/logo.svg'"
          [displayLogoUrl]="'http://gorilainvest.com.br/assets/img/logo.svg'">
          <div gorLogo style="width: 300px; height: 100px;">
            <img src="http://gorilainvest.com.br/assets/img/logo.svg">
          </div>
          <section letterheadSubheader style="text-align: center;">This is the subheader section</section>
          <section letterheadBody style="text-align: center;">This is the body section</section>
        </gor-letterhead>
      </div>
      `,
      props: {
        headerRightMain: object('headerRightSub', { label: 'Label: ', value: 'Main header' }),
        headerRightSub: text('headerRightMain', 'Right subheader'),
        footerLeftMain: text('footerLeftMain', 'Footer main'),
        footerLeftSub: text('footerLeftSub', 'Footer sub'),
        footerMiddleMain: text('footerMiddleMain', 'Footer middle main'),
        footerMiddleSub: text('footerMiddleSub', 'Footer middle sub'),
        landingPageUrl: text('landingPageUrl', 'gorila.com.br'),
      }
    })
  )
