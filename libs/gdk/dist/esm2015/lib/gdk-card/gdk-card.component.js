/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation } from "@angular/core";
/**
 * A card to be used for shell libs with input and output aside, a preview and code areas.
 */
export class GdkCardComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RrLWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdvcmlsYWludmVzdC9nZGsvIiwic291cmNlcyI6WyJsaWIvZ2RrLWNhcmQvZ2RrLWNhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQVc1RSxNQUFNLE9BQU8sZ0JBQWdCO0lBMEIzQixnQkFBZSxDQUFDOzs7O0lBRWhCLFFBQVEsS0FBSSxDQUFDOzs7WUFsQ2QsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixzZ0dBQXdDO2dCQUV4QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDdEM7Ozs7O29CQUtFLEtBQUs7dUJBS0wsS0FBSztzQkFLTCxLQUFLOzJCQUtMLEtBQUs7NEJBS0wsS0FBSzs7Ozs7OztJQXBCTixpQ0FBdUI7Ozs7O0lBS3ZCLG9DQUEwQjs7Ozs7SUFLMUIsbUNBQTBCOzs7OztJQUsxQix3Q0FBK0I7Ozs7O0lBSy9CLHlDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuLyoqXHJcbiAqIEEgY2FyZCB0byBiZSB1c2VkIGZvciBzaGVsbCBsaWJzIHdpdGggaW5wdXQgYW5kIG91dHB1dCBhc2lkZSwgYSBwcmV2aWV3IGFuZCBjb2RlIGFyZWFzLlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiZ2RrLWNhcmRcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL2dkay1jYXJkLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL2dkay1jYXJkLmNvbXBvbmVudC5zY3NzXCJdLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIEdka0NhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIC8qKlxyXG4gICAqIFRoZSB0aXRsZSBmb3IgdGhlIGNhcmQuXHJcbiAgICovXHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHN1YnRpdGxlIGZvciB0aGUgY2FyZC5cclxuICAgKi9cclxuICBASW5wdXQoKSBzdWJ0aXRsZTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBGbGFnIHRvIGNvbnRyb2wgcmlnaHQgYXNpZGUgZm9yIHN1bW1hcnkgaW5mby5cclxuICAgKi9cclxuICBASW5wdXQoKSBzdW1tYXJ5OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBGbGFnIHRvIG5vdCBzaG93IGlucHV0cyBpbiBhc2lkZS5cclxuICAgKi9cclxuICBASW5wdXQoKSB3aXRob3V0SW5wdXQ6IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIEZsYWcgdG8gbm90IHNob3cgb3V0cHV0cyBpbiBhc2lkZS5cclxuICAgKi9cclxuICBASW5wdXQoKSB3aXRob3V0T3V0cHV0OiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge31cclxufVxyXG4iXX0=