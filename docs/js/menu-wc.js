'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">
                        <img alt="" class="img-responsive" data-type="compodoc-logo" data-src=images/logo_gorila.svg> 
                    </a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter additional">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#additional-pages"'
                            : 'data-target="#xs-additional-pages"' }>
                            <span class="icon ion-ios-book"></span>
                            <span>Development Documentation</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="additional-pages"' : 'id="xs-additional-pages"' }>
                                    <li class="link ">
                                        <a href="additional-documentation/getting-started.html" data-type="entity-link" data-context-id="additional">Getting started</a>
                                    </li>
                                    <li class="link ">
                                        <a href="additional-documentation/contributing.html" data-type="entity-link" data-context-id="additional">Contributing</a>
                                    </li>
                                    <li class="link ">
                                        <a href="additional-documentation/dev-environment.html" data-type="entity-link" data-context-id="additional">Dev Environment</a>
                                    </li>
                                    <li class="link ">
                                        <a href="additional-documentation/dependency-graph.html" data-type="entity-link" data-context-id="additional">Dependency Graph</a>
                                    </li>
                        </ul>
                    </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/ArrowVariationModule.html" data-type="entity-link">ArrowVariationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ArrowVariationModule-52feee91c3d530551c89497f15c8d1dd"' : 'data-target="#xs-components-links-module-ArrowVariationModule-52feee91c3d530551c89497f15c8d1dd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ArrowVariationModule-52feee91c3d530551c89497f15c8d1dd"' :
                                            'id="xs-components-links-module-ArrowVariationModule-52feee91c3d530551c89497f15c8d1dd"' }>
                                            <li class="link">
                                                <a href="components/ArrowVariationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ArrowVariationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ButtonModule.html" data-type="entity-link">ButtonModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ButtonModule-02f80cadda7922c749e8fc0d66cf26c4"' : 'data-target="#xs-components-links-module-ButtonModule-02f80cadda7922c749e8fc0d66cf26c4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ButtonModule-02f80cadda7922c749e8fc0d66cf26c4"' :
                                            'id="xs-components-links-module-ButtonModule-02f80cadda7922c749e8fc0d66cf26c4"' }>
                                            <li class="link">
                                                <a href="components/ButtonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ButtonComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CardContainerModule.html" data-type="entity-link">CardContainerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CardContainerModule-1f4ce2e0c5cfcc2c1021e0f1e9e0caa0"' : 'data-target="#xs-components-links-module-CardContainerModule-1f4ce2e0c5cfcc2c1021e0f1e9e0caa0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CardContainerModule-1f4ce2e0c5cfcc2c1021e0f1e9e0caa0"' :
                                            'id="xs-components-links-module-CardContainerModule-1f4ce2e0c5cfcc2c1021e0f1e9e0caa0"' }>
                                            <li class="link">
                                                <a href="components/CardContainerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardContainerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CountdownButtonModule.html" data-type="entity-link">CountdownButtonModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CountdownButtonModule-d6291e9a4c0254b060069b31be576daf"' : 'data-target="#xs-components-links-module-CountdownButtonModule-d6291e9a4c0254b060069b31be576daf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CountdownButtonModule-d6291e9a4c0254b060069b31be576daf"' :
                                            'id="xs-components-links-module-CountdownButtonModule-d6291e9a4c0254b060069b31be576daf"' }>
                                            <li class="link">
                                                <a href="components/CountdownButtonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CountdownButtonComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CurrencyDisplayModule.html" data-type="entity-link">CurrencyDisplayModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CurrencyDisplayModule-07cebdf76568479046bc9c283e61319c"' : 'data-target="#xs-components-links-module-CurrencyDisplayModule-07cebdf76568479046bc9c283e61319c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CurrencyDisplayModule-07cebdf76568479046bc9c283e61319c"' :
                                            'id="xs-components-links-module-CurrencyDisplayModule-07cebdf76568479046bc9c283e61319c"' }>
                                            <li class="link">
                                                <a href="components/CurrencyDisplayComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CurrencyDisplayComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DataFormatterModule.html" data-type="entity-link">DataFormatterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DataFormatterModule-d584b0c08f6235e85b9c9ee24783faed"' : 'data-target="#xs-components-links-module-DataFormatterModule-d584b0c08f6235e85b9c9ee24783faed"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DataFormatterModule-d584b0c08f6235e85b9c9ee24783faed"' :
                                            'id="xs-components-links-module-DataFormatterModule-d584b0c08f6235e85b9c9ee24783faed"' }>
                                            <li class="link">
                                                <a href="components/DataFormatterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DataFormatterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-DataFormatterModule-d584b0c08f6235e85b9c9ee24783faed"' : 'data-target="#xs-pipes-links-module-DataFormatterModule-d584b0c08f6235e85b9c9ee24783faed"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-DataFormatterModule-d584b0c08f6235e85b9c9ee24783faed"' :
                                            'id="xs-pipes-links-module-DataFormatterModule-d584b0c08f6235e85b9c9ee24783faed"' }>
                                            <li class="link">
                                                <a href="pipes/GorCustomPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GorCustomPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatepickerModule.html" data-type="entity-link">DatepickerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DatepickerModule-0a55976396e8801bfb08d1028a1b9a6f"' : 'data-target="#xs-components-links-module-DatepickerModule-0a55976396e8801bfb08d1028a1b9a6f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DatepickerModule-0a55976396e8801bfb08d1028a1b9a6f"' :
                                            'id="xs-components-links-module-DatepickerModule-0a55976396e8801bfb08d1028a1b9a6f"' }>
                                            <li class="link">
                                                <a href="components/CalendarHeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CalendarHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DatepickerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DatepickerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DatepickerContentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DatepickerContentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DatepickerToggleComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DatepickerToggleComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DirectivesModule.html" data-type="entity-link">DirectivesModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-DirectivesModule-b28d7cfe33c287a45403fd375bfdafbc"' : 'data-target="#xs-directives-links-module-DirectivesModule-b28d7cfe33c287a45403fd375bfdafbc"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-DirectivesModule-b28d7cfe33c287a45403fd375bfdafbc"' :
                                        'id="xs-directives-links-module-DirectivesModule-b28d7cfe33c287a45403fd375bfdafbc"' }>
                                        <li class="link">
                                            <a href="directives/CancelableRouterLinkWithHrefDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">CancelableRouterLinkWithHrefDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/TippyDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">TippyDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/TruncateDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">TruncateDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/EnhancedHeaderModule.html" data-type="entity-link">EnhancedHeaderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-EnhancedHeaderModule-ec8512cba1b0b7e48dac1088b741c34c"' : 'data-target="#xs-components-links-module-EnhancedHeaderModule-ec8512cba1b0b7e48dac1088b741c34c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EnhancedHeaderModule-ec8512cba1b0b7e48dac1088b741c34c"' :
                                            'id="xs-components-links-module-EnhancedHeaderModule-ec8512cba1b0b7e48dac1088b741c34c"' }>
                                            <li class="link">
                                                <a href="components/EnhancedHeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EnhancedHeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EnhancedTitleModule.html" data-type="entity-link">EnhancedTitleModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-EnhancedTitleModule-0de74d900d575673dcefedb97fd68efa"' : 'data-target="#xs-components-links-module-EnhancedTitleModule-0de74d900d575673dcefedb97fd68efa"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EnhancedTitleModule-0de74d900d575673dcefedb97fd68efa"' :
                                            'id="xs-components-links-module-EnhancedTitleModule-0de74d900d575673dcefedb97fd68efa"' }>
                                            <li class="link">
                                                <a href="components/EnhancedTitleComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EnhancedTitleComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FormTextModule.html" data-type="entity-link">FormTextModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FormTextModule-ba70c74c7379057277d4762ec4f726e8"' : 'data-target="#xs-components-links-module-FormTextModule-ba70c74c7379057277d4762ec4f726e8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FormTextModule-ba70c74c7379057277d4762ec4f726e8"' :
                                            'id="xs-components-links-module-FormTextModule-ba70c74c7379057277d4762ec4f726e8"' }>
                                            <li class="link">
                                                <a href="components/FormTextComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FormTextComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/GdkJsonInputModule.html" data-type="entity-link">GdkJsonInputModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-GdkJsonInputModule-8442697ecc19cca5c67bef3d081a0390"' : 'data-target="#xs-components-links-module-GdkJsonInputModule-8442697ecc19cca5c67bef3d081a0390"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GdkJsonInputModule-8442697ecc19cca5c67bef3d081a0390"' :
                                            'id="xs-components-links-module-GdkJsonInputModule-8442697ecc19cca5c67bef3d081a0390"' }>
                                            <li class="link">
                                                <a href="components/GdkJsonInputComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GdkJsonInputComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/GdkModule.html" data-type="entity-link">GdkModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-GdkModule-c2d8ff904ccf1300ad7609a1d9b12089"' : 'data-target="#xs-components-links-module-GdkModule-c2d8ff904ccf1300ad7609a1d9b12089"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GdkModule-c2d8ff904ccf1300ad7609a1d9b12089"' :
                                            'id="xs-components-links-module-GdkModule-c2d8ff904ccf1300ad7609a1d9b12089"' }>
                                            <li class="link">
                                                <a href="components/GdkCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GdkCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GdkImportComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GdkImportComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GdkJsonInputComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GdkJsonInputComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/IconModule.html" data-type="entity-link">IconModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-IconModule-cc742024bd13c3e8d48d94766f155bd5"' : 'data-target="#xs-components-links-module-IconModule-cc742024bd13c3e8d48d94766f155bd5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-IconModule-cc742024bd13c3e8d48d94766f155bd5"' :
                                            'id="xs-components-links-module-IconModule-cc742024bd13c3e8d48d94766f155bd5"' }>
                                            <li class="link">
                                                <a href="components/IconComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IconComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LetterheadModule.html" data-type="entity-link">LetterheadModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LetterheadModule-6695749a98bc4fbe985620c0ed43ca9c"' : 'data-target="#xs-components-links-module-LetterheadModule-6695749a98bc4fbe985620c0ed43ca9c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LetterheadModule-6695749a98bc4fbe985620c0ed43ca9c"' :
                                            'id="xs-components-links-module-LetterheadModule-6695749a98bc4fbe985620c0ed43ca9c"' }>
                                            <li class="link">
                                                <a href="components/LetterheadComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LetterheadComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LetterheadFooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LetterheadFooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LetterheadHeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LetterheadHeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoadingModule.html" data-type="entity-link">LoadingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoadingModule-91eaeb96fcd27220ffb25fdf040e9602"' : 'data-target="#xs-components-links-module-LoadingModule-91eaeb96fcd27220ffb25fdf040e9602"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoadingModule-91eaeb96fcd27220ffb25fdf040e9602"' :
                                            'id="xs-components-links-module-LoadingModule-91eaeb96fcd27220ffb25fdf040e9602"' }>
                                            <li class="link">
                                                <a href="components/LoadingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoadingComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PageHeaderModule.html" data-type="entity-link">PageHeaderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PageHeaderModule-1503152f819164283e9c1bf49de1f7c4"' : 'data-target="#xs-components-links-module-PageHeaderModule-1503152f819164283e9c1bf49de1f7c4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PageHeaderModule-1503152f819164283e9c1bf49de1f7c4"' :
                                            'id="xs-components-links-module-PageHeaderModule-1503152f819164283e9c1bf49de1f7c4"' }>
                                            <li class="link">
                                                <a href="components/PageHeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageHeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-PageHeaderModule-1503152f819164283e9c1bf49de1f7c4"' : 'data-target="#xs-directives-links-module-PageHeaderModule-1503152f819164283e9c1bf49de1f7c4"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-PageHeaderModule-1503152f819164283e9c1bf49de1f7c4"' :
                                        'id="xs-directives-links-module-PageHeaderModule-1503152f819164283e9c1bf49de1f7c4"' }>
                                        <li class="link">
                                            <a href="directives/PageHeaderBottomDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageHeaderBottomDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PipesModule.html" data-type="entity-link">PipesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-PipesModule-a9c05a354d54e3065f778e1273581cb8"' : 'data-target="#xs-pipes-links-module-PipesModule-a9c05a354d54e3065f778e1273581cb8"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-PipesModule-a9c05a354d54e3065f778e1273581cb8"' :
                                            'id="xs-pipes-links-module-PipesModule-a9c05a354d54e3065f778e1273581cb8"' }>
                                            <li class="link">
                                                <a href="pipes/BigCurrencyPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BigCurrencyPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/CssClassPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CssClassPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/PastPeriodColonPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PastPeriodColonPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PopoverModule.html" data-type="entity-link">PopoverModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PopoverModule-dceddd25b1c5979c18291b4646ff72f3"' : 'data-target="#xs-components-links-module-PopoverModule-dceddd25b1c5979c18291b4646ff72f3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PopoverModule-dceddd25b1c5979c18291b4646ff72f3"' :
                                            'id="xs-components-links-module-PopoverModule-dceddd25b1c5979c18291b4646ff72f3"' }>
                                            <li class="link">
                                                <a href="components/PopoverComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PopoverComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PopoverModule-dceddd25b1c5979c18291b4646ff72f3"' : 'data-target="#xs-injectables-links-module-PopoverModule-dceddd25b1c5979c18291b4646ff72f3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PopoverModule-dceddd25b1c5979c18291b4646ff72f3"' :
                                        'id="xs-injectables-links-module-PopoverModule-dceddd25b1c5979c18291b4646ff72f3"' }>
                                        <li class="link">
                                            <a href="injectables/PopoverService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>PopoverService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PopupConfirmModule.html" data-type="entity-link">PopupConfirmModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PopupConfirmModule-00e6d7563f6f25169ded26aaee450bd0"' : 'data-target="#xs-components-links-module-PopupConfirmModule-00e6d7563f6f25169ded26aaee450bd0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PopupConfirmModule-00e6d7563f6f25169ded26aaee450bd0"' :
                                            'id="xs-components-links-module-PopupConfirmModule-00e6d7563f6f25169ded26aaee450bd0"' }>
                                            <li class="link">
                                                <a href="components/PopupConfirmComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PopupConfirmComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ScrollContainerModule.html" data-type="entity-link">ScrollContainerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ScrollContainerModule-c5c78d2296c34474436b7a45d06da8c2"' : 'data-target="#xs-components-links-module-ScrollContainerModule-c5c78d2296c34474436b7a45d06da8c2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ScrollContainerModule-c5c78d2296c34474436b7a45d06da8c2"' :
                                            'id="xs-components-links-module-ScrollContainerModule-c5c78d2296c34474436b7a45d06da8c2"' }>
                                            <li class="link">
                                                <a href="components/ScrollContainerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ScrollContainerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SectionTitleModule.html" data-type="entity-link">SectionTitleModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SectionTitleModule-4ba0371e1554cfe3af470a8be1eebdb6"' : 'data-target="#xs-components-links-module-SectionTitleModule-4ba0371e1554cfe3af470a8be1eebdb6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SectionTitleModule-4ba0371e1554cfe3af470a8be1eebdb6"' :
                                            'id="xs-components-links-module-SectionTitleModule-4ba0371e1554cfe3af470a8be1eebdb6"' }>
                                            <li class="link">
                                                <a href="components/SectionTitleComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SectionTitleComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SlideToggleModule.html" data-type="entity-link">SlideToggleModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SlideToggleModule-a6106af6348e482d6c57e1af913a4657"' : 'data-target="#xs-components-links-module-SlideToggleModule-a6106af6348e482d6c57e1af913a4657"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SlideToggleModule-a6106af6348e482d6c57e1af913a4657"' :
                                            'id="xs-components-links-module-SlideToggleModule-a6106af6348e482d6c57e1af913a4657"' }>
                                            <li class="link">
                                                <a href="components/SlideToggleComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SlideToggleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SlideToggleGroupComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SlideToggleGroupComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SortHeaderModule.html" data-type="entity-link">SortHeaderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SortHeaderModule-3cad3ebe5014b088f84aa667fef6e13a"' : 'data-target="#xs-components-links-module-SortHeaderModule-3cad3ebe5014b088f84aa667fef6e13a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SortHeaderModule-3cad3ebe5014b088f84aa667fef6e13a"' :
                                            'id="xs-components-links-module-SortHeaderModule-3cad3ebe5014b088f84aa667fef6e13a"' }>
                                            <li class="link">
                                                <a href="components/SortHeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SortHeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TooltipModule.html" data-type="entity-link">TooltipModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TooltipModule-23680c8ec491cd83258fe50bcd6d7762"' : 'data-target="#xs-components-links-module-TooltipModule-23680c8ec491cd83258fe50bcd6d7762"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TooltipModule-23680c8ec491cd83258fe50bcd6d7762"' :
                                            'id="xs-components-links-module-TooltipModule-23680c8ec491cd83258fe50bcd6d7762"' }>
                                            <li class="link">
                                                <a href="components/TooltipComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TooltipComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/PopoverRef.html" data-type="entity-link">PopoverRef</a>
                            </li>
                            <li class="link">
                                <a href="classes/PopoverStringContent.html" data-type="entity-link">PopoverStringContent</a>
                            </li>
                            <li class="link">
                                <a href="classes/PopoverTemplateContent.html" data-type="entity-link">PopoverTemplateContent</a>
                            </li>
                            <li class="link">
                                <a href="classes/TemplateStub.html" data-type="entity-link">TemplateStub</a>
                            </li>
                            <li class="link">
                                <a href="classes/TippyHelper.html" data-type="entity-link">TippyHelper</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/CurrencyStyle.html" data-type="entity-link">CurrencyStyle</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HTMLTippyProps.html" data-type="entity-link">HTMLTippyProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MatSortHeaderColumnDef.html" data-type="entity-link">MatSortHeaderColumnDef</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PopoverCloseEvent.html" data-type="entity-link">PopoverCloseEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PopoverParams.html" data-type="entity-link">PopoverParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PopupConfirmAction.html" data-type="entity-link">PopupConfirmAction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PopupConfirmContent.html" data-type="entity-link">PopupConfirmContent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PopupConfirmModel.html" data-type="entity-link">PopupConfirmModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Scrollable.html" data-type="entity-link">Scrollable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ScrollInfo.html" data-type="entity-link">ScrollInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ToggleData.html" data-type="entity-link">ToggleData</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});