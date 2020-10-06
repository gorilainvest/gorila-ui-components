import { ICON_BASE_SRC } from '@gorilainvest/ui-toolkit/icon';
import { ShadowModule } from '@gorilainvest/ui-toolkit/shadow';
import { boolean, object, text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { LetterheadModule } from './letterhead.module';

storiesOf('Letterhead', module)
  .addDecorator(
    moduleMetadata({
      imports: [LetterheadModule, ShadowModule],
      providers: [{ provide: ICON_BASE_SRC, useValue: 'https://s3.amazonaws.com/gorila-images/app/' }]
    })
  )
  .addDecorator(withKnobs)
  .add(
    'header without label',
    () => ({
      styles: [
        `
        .mydiv {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }

        .main {
          border: 1px solid gray;
          text-align: center;
          min-height: 200px;
        }
        `
      ],
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
          [loading]="loading"
          [displayShadow]="displayShadow"
          [printLogoUrl]="'http://gorilainvest.com.br/assets/img/logo.svg'"
          [displayLogoUrl]="'http://gorilainvest.com.br/assets/img/logo.svg'">
          <div gorLogo style="width: 300px; height: 100px;">
            <img src="http://gorilainvest.com.br/assets/img/logo.svg">
          </div>
          <section letterheadSubheader style="text-align: center;">This is the subheader section</section>
          <section letterheadBody class="main">
            <div class='mydiv'>
              <h1>This is a title</h1>
              <div>This is a content</div>
            </div>
          </section>
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
        displayShadow: boolean('displayShadow', false),
        loading: boolean('loading', false),
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
          [loading]="loading"
          [displayShadow]="displayShadow"
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
        displayShadow: boolean('displayShadow', false),
        loading: boolean('loading', false),
      }
    })
  )
