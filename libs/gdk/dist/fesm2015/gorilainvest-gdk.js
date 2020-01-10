import { Component, ViewEncapsulation, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatCommonModule } from '@angular/material/core';
import '@angular/forms';
import { keys } from 'ramda';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A card to be used for shell libs with input and output aside, a preview and code areas.
 */
class GdkCardComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
GdkCardComponent.decorators = [
    { type: Component, args: [{
                selector: "gdk-card",
                template: "<mat-card>\r\n  <ng-container *ngIf=\"title; else noTitleTemplate\">\r\n    <mat-card-title>{{ title }}</mat-card-title>\r\n    <mat-card-subtitle *ngIf=\"subtitle\">{{ subtitle }}</mat-card-subtitle>\r\n    <mat-card-content>\r\n      <mat-grid-list cols=\"5\" rowHeight=\"50%\">\r\n        <mat-grid-tile colspan=\"1\" rowSpan=\"2\" class=\"left-aside\">\r\n          <mat-accordion>\r\n            <mat-expansion-panel expanded>\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title> Inputs: </mat-panel-title>\r\n              </mat-expansion-panel-header>\r\n              <aside class=\"card-body__configurations\">\r\n                <ng-content select=\"mat-list[role='list'].inputs\"></ng-content>\r\n                <ng-container *ngIf=\"withoutInput\">\r\n                  <mat-list role=\"list\">\r\n                    <mat-list-item role=\"listitem\"\r\n                      >No inputs provided</mat-list-item\r\n                    >\r\n                  </mat-list>\r\n                </ng-container>\r\n              </aside>\r\n            </mat-expansion-panel>\r\n            <mat-expansion-panel>\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title> Outputs: </mat-panel-title>\r\n              </mat-expansion-panel-header>\r\n              <aside class=\"card-body__configurations\">\r\n                <ng-content select=\"mat-list[role='list'].outputs\"></ng-content>\r\n                <ng-container *ngIf=\"withoutOutput\">\r\n                  <mat-list role=\"list\">\r\n                    <mat-list-item role=\"listitem\"\r\n                      >No outputs provided</mat-list-item\r\n                    >\r\n                  </mat-list>\r\n                </ng-container>\r\n              </aside>\r\n            </mat-expansion-panel>\r\n          </mat-accordion>\r\n        </mat-grid-tile>\r\n        <mat-grid-tile colspan=\"3\" rowSpan=\"1\" class=\"visual\">\r\n\r\n          <mat-grid-tile-header>\r\n            <h4 mat-line>\r\n              Visual result:\r\n            </h4>\r\n          </mat-grid-tile-header>\r\n\r\n          <ng-content select=\".widget\"></ng-content>\r\n        </mat-grid-tile>\r\n        <mat-grid-tile colspan=\"3\" rowSpan=\"1\" class=\"code\">\r\n          <mat-grid-tile-header>The fun part:</mat-grid-tile-header>\r\n          <ng-content select=\".code\"></ng-content>\r\n        </mat-grid-tile>\r\n        <mat-grid-tile\r\n          *ngIf=\"summary\"\r\n          colspan=\"1\"\r\n          rowSpan=\"2\"\r\n          class=\"right-aside\"\r\n        >\r\n\r\n          <mat-grid-tile-header>\r\n            <h4 mat-line>\r\n              Summary:\r\n            </h4>\r\n          </mat-grid-tile-header>\r\n\r\n          <ng-content select=\"mat-list[role='list'].summary\"></ng-content>\r\n        </mat-grid-tile>\r\n      </mat-grid-list>\r\n    </mat-card-content>\r\n  </ng-container>\r\n  <ng-template #noTitleTemplate>\r\n    <mat-error><h1>Title is required!</h1></mat-error>\r\n  </ng-template>\r\n</mat-card>\r\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["gdk-card{display:block;height:100%}gdk-card .mat-expansion-panel{padding-bottom:15px}gdk-card .mat-card{height:calc(100% - 60px);min-height:400px;overflow:auto}gdk-card .card-body__configurations{width:100%}gdk-card .mat-accordion{height:100%;overflow-y:auto}gdk-card mat-form-field .mat-form-field-underline{position:static}gdk-card mat-form-field .mat-form-field-subscript-wrapper{position:static;max-width:180px}gdk-card .mat-card-content{height:calc(100% - 60px);min-height:400px}gdk-card .mat-card-content .mat-card-title{font-size:4rem}gdk-card .mat-card-content .mat-list[role=list]{display:-ms-grid;display:grid;grid-row-gap:10px;grid-auto-rows:auto}gdk-card .mat-grid-list{height:100%}gdk-card .mat-grid-list>div{display:-ms-grid;display:grid;grid-template-areas:\"a b b b c\" \"a d d d c\";-ms-grid-columns:1.3fr 1fr 1fr 1fr 0fr;grid-template-columns:1.3fr 1fr 1fr 1fr 0fr;-ms-grid-rows:1fr 1fr;grid-template-rows:1fr 1fr;height:100%;width:100%}gdk-card .mat-grid-list>div .mat-grid-tile{height:100%!important;left:unset!important;position:relative!important;top:unset!important;width:100%!important}gdk-card .mat-grid-list>div .mat-grid-tile .mat-figure{display:flex;flex-direction:column;justify-content:flex-start}gdk-card .mat-grid-list>div .mat-grid-tile-header{align-self:flex-start;background:0 0;color:#000;font-size:2rem;overflow:initial;position:relative}gdk-card .mat-grid-list>div .left-aside{-ms-grid-row:1;-ms-grid-row-span:2;-ms-grid-column:1;grid-area:a}gdk-card .mat-grid-list>div .visual{-ms-grid-row:1;-ms-grid-column:2;-ms-grid-column-span:3;grid-area:b}gdk-card .mat-grid-list>div .right-aside{-ms-grid-row:1;-ms-grid-row-span:2;-ms-grid-column:5;grid-area:c}gdk-card .mat-grid-list>div .code{-ms-grid-row:2;-ms-grid-column:2;-ms-grid-column-span:3;grid-area:d}"]
            }] }
];
/** @nocollapse */
GdkCardComponent.ctorParameters = () => [];
GdkCardComponent.propDecorators = {
    title: [{ type: Input }],
    subtitle: [{ type: Input }],
    summary: [{ type: Input }],
    withoutInput: [{ type: Input }],
    withoutOutput: [{ type: Input }]
};
if (false) {
    /**
     * The title for the card.
     * @type {?}
     */
    GdkCardComponent.prototype.title;
    /**
     * The subtitle for the card.
     * @type {?}
     */
    GdkCardComponent.prototype.subtitle;
    /**
     * Flag to control right aside for summary info.
     * @type {?}
     */
    GdkCardComponent.prototype.summary;
    /**
     * Flag to not show inputs in aside.
     * @type {?}
     */
    GdkCardComponent.prototype.withoutInput;
    /**
     * Flag to not show outputs in aside.
     * @type {?}
     */
    GdkCardComponent.prototype.withoutOutput;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GdkImportComponent {
    constructor() {
        this.moduleNameStr = '';
        this.moduleTitle = '';
        /**
         * The prefix input. Can be gorilainvest, gro, gor, etc
         */
        this.prefix = '';
        this.keys = [];
        this.values = {};
    }
    /**
     * The name of module separeted by hyphen without module prefix
     * E.G. CardContainerModule send card-container as input but not gorilainvest-card-container.
     * the prefix you must sent in the prefix input
     * @param {?} moduleName
     * @return {?}
     */
    set moduleName(moduleName) {
        this.moduleNameStr = moduleName;
        this.moduleTitle = moduleName.split('-').map((/**
         * @param {?} name
         * @return {?}
         */
        (name) => name.charAt(0).toUpperCase() + name.slice(1))).join('');
    }
    /**
     * A form group where the keys are the component input names and
     * the values are the component input values.
     * (see currency-display into shell/layout/src/lib/ui folder)
     * @param {?} form
     * @return {?}
     */
    set form(form) {
        this.keys = keys(form.controls);
        this.values = form.value;
        form.valueChanges.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => this.values = data));
    }
}
GdkImportComponent.decorators = [
    { type: Component, args: [{
                selector: 'gdk-import',
                template: "<pre>\r\n  <span>// module import</span>\r\n  <span>import &#123; {{moduleTitle}}Module &#125; from '@gorilainvest/ui-toolkit/dist/{{moduleNameStr}}';</span>\r\n  <span></span>\r\n  <ng-container *ngIf=\"!!prefix\">\r\n    <span>// template.html</span>\r\n    <ng-container *ngIf=\"!!keys&&keys.length>0;else withoutParameters\">\r\n      <ng-container *ngTemplateOutlet=\"withParameters\"></ng-container>\r\n    </ng-container>\r\n    </ng-container>\r\n  <ng-content></ng-content>\r\n  <span></span>\r\n</pre>\r\n\r\n<ng-template #withoutParameters>\r\n  <span>\r\n    <ng-container *ngTemplateOutlet=\"openTag\"></ng-container>\r\n    <ng-container *ngTemplateOutlet=\"closeTag\"></ng-container>\r\n  </span>\r\n</ng-template>\r\n<ng-template #withParameters>\r\n  <span>\r\n    <ng-container *ngTemplateOutlet=\"openTag\"></ng-container>\r\n  </span>\r\n  <ng-container *ngTemplateOutlet=\"displayParameters\"></ng-container>\r\n  <span>\r\n    <ng-container *ngTemplateOutlet=\"closeTag\"></ng-container>\r\n  </span>\r\n</ng-template>\r\n<ng-template #openTag>&lt;{{prefix}}-{{moduleNameStr}}</ng-template>\r\n<ng-template #closeTag>&gt;&lt;/{{prefix}}-{{moduleNameStr}}&gt;</ng-template>\r\n<ng-template #displayParameters>\r\n  <span *ngFor=\"let key of keys\"> [{{key}}]=&quot;'{{values[key]}}'&quot;</span>\r\n<ng-template>\r\n",
                encapsulation: ViewEncapsulation.None,
                styles: [":host{overflow:hidden}gdk-import pre{display:flex;align-items:baseline;justify-content:center;flex-direction:column}gdk-import pre span:not(:first-child){margin-top:0}"]
            }] }
];
GdkImportComponent.propDecorators = {
    moduleName: [{ type: Input }],
    prefix: [{ type: Input }],
    form: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    GdkImportComponent.prototype.moduleNameStr;
    /** @type {?} */
    GdkImportComponent.prototype.moduleTitle;
    /**
     * The prefix input. Can be gorilainvest, gro, gor, etc
     * @type {?}
     */
    GdkImportComponent.prototype.prefix;
    /** @type {?} */
    GdkImportComponent.prototype.keys;
    /** @type {?} */
    GdkImportComponent.prototype.values;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GdkModule {
}
GdkModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatCardModule,
                    MatCommonModule,
                    MatExpansionModule,
                    MatGridListModule,
                    MatInputModule,
                    MatListModule,
                    MatSelectModule
                ],
                declarations: [GdkCardComponent, GdkImportComponent],
                exports: [GdkCardComponent, GdkImportComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { GdkModule, GdkCardComponent as ɵa, GdkImportComponent as ɵb };
//# sourceMappingURL=gorilainvest-gdk.js.map
