/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation } from "@angular/core";
/**
 * A card to be used for shell libs with input and output aside, a preview and code areas.
 */
var GdkCardComponent = /** @class */ (function () {
    function GdkCardComponent() {
    }
    /**
     * @return {?}
     */
    GdkCardComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    GdkCardComponent.decorators = [
        { type: Component, args: [{
                    selector: "gdk-card",
                    template: "<mat-card>\r\n  <ng-container *ngIf=\"title; else noTitleTemplate\">\r\n    <mat-card-title>{{ title }}</mat-card-title>\r\n    <mat-card-subtitle *ngIf=\"subtitle\">{{ subtitle }}</mat-card-subtitle>\r\n    <mat-card-content>\r\n      <mat-grid-list cols=\"5\" rowHeight=\"50%\">\r\n        <mat-grid-tile colspan=\"1\" rowSpan=\"2\" class=\"left-aside\">\r\n          <mat-accordion>\r\n            <mat-expansion-panel expanded>\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title> Inputs: </mat-panel-title>\r\n              </mat-expansion-panel-header>\r\n              <aside class=\"card-body__configurations\">\r\n                <ng-content select=\"mat-list[role='list'].inputs\"></ng-content>\r\n                <ng-container *ngIf=\"withoutInput\">\r\n                  <mat-list role=\"list\">\r\n                    <mat-list-item role=\"listitem\"\r\n                      >No inputs provided</mat-list-item\r\n                    >\r\n                  </mat-list>\r\n                </ng-container>\r\n              </aside>\r\n            </mat-expansion-panel>\r\n            <mat-expansion-panel>\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title> Outputs: </mat-panel-title>\r\n              </mat-expansion-panel-header>\r\n              <aside class=\"card-body__configurations\">\r\n                <ng-content select=\"mat-list[role='list'].outputs\"></ng-content>\r\n                <ng-container *ngIf=\"withoutOutput\">\r\n                  <mat-list role=\"list\">\r\n                    <mat-list-item role=\"listitem\"\r\n                      >No outputs provided</mat-list-item\r\n                    >\r\n                  </mat-list>\r\n                </ng-container>\r\n              </aside>\r\n            </mat-expansion-panel>\r\n          </mat-accordion>\r\n        </mat-grid-tile>\r\n        <mat-grid-tile colspan=\"3\" rowSpan=\"1\" class=\"visual\">\r\n\r\n          <mat-grid-tile-header>\r\n            <h4 mat-line>\r\n              Visual result:\r\n            </h4>\r\n          </mat-grid-tile-header>\r\n\r\n          <ng-content select=\".widget\"></ng-content>\r\n        </mat-grid-tile>\r\n        <mat-grid-tile colspan=\"3\" rowSpan=\"1\" class=\"code\">\r\n          <mat-grid-tile-header>The fun part:</mat-grid-tile-header>\r\n          <ng-content select=\".code\"></ng-content>\r\n        </mat-grid-tile>\r\n        <mat-grid-tile\r\n          *ngIf=\"summary\"\r\n          colspan=\"1\"\r\n          rowSpan=\"2\"\r\n          class=\"right-aside\"\r\n        >\r\n\r\n          <mat-grid-tile-header>\r\n            <h4 mat-line>\r\n              Summary:\r\n            </h4>\r\n          </mat-grid-tile-header>\r\n\r\n          <ng-content select=\"mat-list[role='list'].summary\"></ng-content>\r\n        </mat-grid-tile>\r\n      </mat-grid-list>\r\n    </mat-card-content>\r\n  </ng-container>\r\n  <ng-template #noTitleTemplate>\r\n    <mat-error><h1>Title is required!</h1></mat-error>\r\n  </ng-template>\r\n</mat-card>\r\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["gdk-card{display:block;height:100%}gdk-card .mat-expansion-panel{padding-bottom:15px}gdk-card .mat-card{height:calc(100% - 60px);min-height:400px;overflow:auto}gdk-card .card-body__configurations{width:100%}gdk-card .mat-accordion{height:100%;overflow-y:auto}gdk-card mat-form-field .mat-form-field-underline{position:static}gdk-card mat-form-field .mat-form-field-subscript-wrapper{position:static;max-width:180px}gdk-card .mat-card-content{height:calc(100% - 60px);min-height:400px}gdk-card .mat-card-content .mat-card-title{font-size:4rem}gdk-card .mat-card-content .mat-list[role=list]{display:-ms-grid;display:grid;grid-row-gap:10px;grid-auto-rows:auto}gdk-card .mat-grid-list{height:100%}gdk-card .mat-grid-list>div{display:-ms-grid;display:grid;grid-template-areas:\"a b b b c\" \"a d d d c\";-ms-grid-columns:1.3fr 1fr 1fr 1fr 0fr;grid-template-columns:1.3fr 1fr 1fr 1fr 0fr;-ms-grid-rows:1fr 1fr;grid-template-rows:1fr 1fr;height:100%;width:100%}gdk-card .mat-grid-list>div .mat-grid-tile{height:100%!important;left:unset!important;position:relative!important;top:unset!important;width:100%!important}gdk-card .mat-grid-list>div .mat-grid-tile .mat-figure{display:flex;flex-direction:column;justify-content:flex-start}gdk-card .mat-grid-list>div .mat-grid-tile-header{align-self:flex-start;background:0 0;color:#000;font-size:2rem;overflow:initial;position:relative}gdk-card .mat-grid-list>div .left-aside{-ms-grid-row:1;-ms-grid-row-span:2;-ms-grid-column:1;grid-area:a}gdk-card .mat-grid-list>div .visual{-ms-grid-row:1;-ms-grid-column:2;-ms-grid-column-span:3;grid-area:b}gdk-card .mat-grid-list>div .right-aside{-ms-grid-row:1;-ms-grid-row-span:2;-ms-grid-column:5;grid-area:c}gdk-card .mat-grid-list>div .code{-ms-grid-row:2;-ms-grid-column:2;-ms-grid-column-span:3;grid-area:d}"]
                }] }
    ];
    /** @nocollapse */
    GdkCardComponent.ctorParameters = function () { return []; };
    GdkCardComponent.propDecorators = {
        title: [{ type: Input }],
        subtitle: [{ type: Input }],
        summary: [{ type: Input }],
        withoutInput: [{ type: Input }],
        withoutOutput: [{ type: Input }]
    };
    return GdkCardComponent;
}());
export { GdkCardComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RrLWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdvcmlsYWludmVzdC9nZGsvIiwic291cmNlcyI6WyJsaWIvZ2RrLWNhcmQvZ2RrLWNhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUs1RTtJQWdDRTtJQUFlLENBQUM7Ozs7SUFFaEIsbUNBQVE7OztJQUFSLGNBQVksQ0FBQzs7Z0JBbENkLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsc2dHQUF3QztvQkFFeEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN0Qzs7Ozs7d0JBS0UsS0FBSzsyQkFLTCxLQUFLOzBCQUtMLEtBQUs7K0JBS0wsS0FBSztnQ0FLTCxLQUFLOztJQUtSLHVCQUFDO0NBQUEsQUFuQ0QsSUFtQ0M7U0E3QlksZ0JBQWdCOzs7Ozs7SUFJM0IsaUNBQXVCOzs7OztJQUt2QixvQ0FBMEI7Ozs7O0lBSzFCLG1DQUEwQjs7Ozs7SUFLMUIsd0NBQStCOzs7OztJQUsvQix5Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbi8qKlxyXG4gKiBBIGNhcmQgdG8gYmUgdXNlZCBmb3Igc2hlbGwgbGlicyB3aXRoIGlucHV0IGFuZCBvdXRwdXQgYXNpZGUsIGEgcHJldmlldyBhbmQgY29kZSBhcmVhcy5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImdkay1jYXJkXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9nZGstY2FyZC5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9nZGstY2FyZC5jb21wb25lbnQuc2Nzc1wiXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHZGtDYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAvKipcclxuICAgKiBUaGUgdGl0bGUgZm9yIHRoZSBjYXJkLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBzdWJ0aXRsZSBmb3IgdGhlIGNhcmQuXHJcbiAgICovXHJcbiAgQElucHV0KCkgc3VidGl0bGU6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogRmxhZyB0byBjb250cm9sIHJpZ2h0IGFzaWRlIGZvciBzdW1tYXJ5IGluZm8uXHJcbiAgICovXHJcbiAgQElucHV0KCkgc3VtbWFyeTogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogRmxhZyB0byBub3Qgc2hvdyBpbnB1dHMgaW4gYXNpZGUuXHJcbiAgICovXHJcbiAgQElucHV0KCkgd2l0aG91dElucHV0OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBGbGFnIHRvIG5vdCBzaG93IG91dHB1dHMgaW4gYXNpZGUuXHJcbiAgICovXHJcbiAgQElucHV0KCkgd2l0aG91dE91dHB1dDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcbn1cclxuIl19