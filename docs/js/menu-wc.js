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
                                <a href="modules/GdkModule.html" data-type="entity-link">GdkModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-GdkModule-bc452db10e9716acd37bfacde2bcba90"' : 'data-target="#xs-components-links-module-GdkModule-bc452db10e9716acd37bfacde2bcba90"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GdkModule-bc452db10e9716acd37bfacde2bcba90"' :
                                            'id="xs-components-links-module-GdkModule-bc452db10e9716acd37bfacde2bcba90"' }>
                                            <li class="link">
                                                <a href="components/GdkCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GdkCardComponent</a>
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
                                            'data-target="#pipes-links-module-PipesModule-b3757f3fdf3e9a379a5fd771b78ca075"' : 'data-target="#xs-pipes-links-module-PipesModule-b3757f3fdf3e9a379a5fd771b78ca075"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-PipesModule-b3757f3fdf3e9a379a5fd771b78ca075"' :
                                            'id="xs-pipes-links-module-PipesModule-b3757f3fdf3e9a379a5fd771b78ca075"' }>
                                            <li class="link">
                                                <a href="pipes/BigCurrencyPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BigCurrencyPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/CssClassPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CssClassPipe</a>
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
                                <a href="interfaces/HTMLTippyProps.html" data-type="entity-link">HTMLTippyProps</a>
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