import { object, text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { DirectivesModule } from '@gorilainvest/ui-toolkit/directives';
import { ICON_BASE_SRC, IconModule } from '@gorilainvest/ui-toolkit/icon';

import { LetterheadFooterComponent } from './footer/footer.component';
import { LetterheadHeaderComponent } from './header/header.component';
import { LetterheadComponent } from './letterhead.component';

storiesOf('Letterhead', module)
  .addDecorator(
    moduleMetadata({
      imports: [DirectivesModule, IconModule],
      declarations: [LetterheadComponent, LetterheadFooterComponent, LetterheadHeaderComponent],
      providers: [{ provide: ICON_BASE_SRC, useValue: 'https://s3.amazonaws.com/gorila-images/app/' }]
    })
  )
  .addDecorator(withKnobs)
  .add(
    'header without label',
    () => ({
      template: `
      <div style="width: 1200px; heigth: 300px; background-color: #fff; box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);">
        <gor-letterhead
          tabindex="0"
          [headerRightMain]="headerRightMain"
          [headerIconList]="headerIconList"
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
        headerIconList: object('headerIconList', [{name: 'PDF', folder: 'Platform/Export', tooltipText: 'Baixar PDF', tooltipOrientation: 'top'}]),
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
          tabindex="0"
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
            <img alt="Logo" src="http://gorilainvest.com.br/assets/img/logo.svg">
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
