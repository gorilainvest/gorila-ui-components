/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { keys } from 'ramda';
export class GdkImportComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RrLWltcG9ydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ29yaWxhaW52ZXN0L2dkay8iLCJzb3VyY2VzIjpbImxpYi9nZGstaW1wb3J0L2dkay1pbXBvcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLE9BQU8sQ0FBQztBQVE3QixNQUFNLE9BQU8sa0JBQWtCO0lBTi9CO1FBT1Msa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDbkIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7Ozs7UUFnQlIsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUVyQixTQUFJLEdBQWEsRUFBRSxDQUFDO1FBQ3BCLFdBQU0sR0FBdUIsRUFBRSxDQUFDO0lBYXpDLENBQUM7Ozs7Ozs7O0lBekJDLElBQW9CLFVBQVUsQ0FBQyxVQUFVO1FBQ3ZDLElBQUksQ0FBQyxhQUFhLEdBQUcsVUFBVSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxJQUFZLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN4SCxDQUFDOzs7Ozs7OztJQWlCRCxJQUFvQixJQUFJLENBQUMsSUFBZTtRQUN0QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLEVBQUMsQ0FBQztJQUMxRCxDQUFDOzs7WUF2Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixxMENBQTBDO2dCQUUxQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDdEM7Ozt5QkFVRSxLQUFLO3FCQVNMLEtBQUs7bUJBV0wsS0FBSzs7OztJQTVCTiwyQ0FBMEI7O0lBQzFCLHlDQUF3Qjs7Ozs7SUFnQnhCLG9DQUE0Qjs7SUFFNUIsa0NBQTJCOztJQUMzQixvQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IGtleXMgfSBmcm9tICdyYW1kYSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkay1pbXBvcnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9nZGstaW1wb3J0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9nZGstaW1wb3J0LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2RrSW1wb3J0Q29tcG9uZW50IHtcclxuICBwdWJsaWMgbW9kdWxlTmFtZVN0ciA9ICcnO1xyXG4gIHB1YmxpYyBtb2R1bGVUaXRsZSA9ICcnO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgbmFtZSBvZiBtb2R1bGUgc2VwYXJldGVkIGJ5IGh5cGhlbiB3aXRob3V0IG1vZHVsZSBwcmVmaXhcclxuICAgKiBFLkcuIENhcmRDb250YWluZXJNb2R1bGUgc2VuZCBjYXJkLWNvbnRhaW5lciBhcyBpbnB1dCBidXQgbm90IGdvcmlsYWludmVzdC1jYXJkLWNvbnRhaW5lci5cclxuICAgKiB0aGUgcHJlZml4IHlvdSBtdXN0IHNlbnQgaW4gdGhlIHByZWZpeCBpbnB1dFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBzZXQgbW9kdWxlTmFtZShtb2R1bGVOYW1lKSB7XHJcbiAgICB0aGlzLm1vZHVsZU5hbWVTdHIgPSBtb2R1bGVOYW1lO1xyXG4gICAgdGhpcy5tb2R1bGVUaXRsZSA9IG1vZHVsZU5hbWUuc3BsaXQoJy0nKS5tYXAoKG5hbWU6IHN0cmluZykgPT4gbmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5hbWUuc2xpY2UoMSkpLmpvaW4oJycpO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBwcmVmaXggaW5wdXQuIENhbiBiZSBnb3JpbGFpbnZlc3QsIGdybywgZ29yLCBldGNcclxuICAgKi9cclxuICBASW5wdXQoKSBwdWJsaWMgcHJlZml4ID0gJyc7XHJcblxyXG4gIHB1YmxpYyBrZXlzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIHB1YmxpYyB2YWx1ZXM6IHtbczogc3RyaW5nXTogYW55fSA9IHt9O1xyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogQSBmb3JtIGdyb3VwIHdoZXJlIHRoZSBrZXlzIGFyZSB0aGUgY29tcG9uZW50IGlucHV0IG5hbWVzIGFuZFxyXG4gICAqIHRoZSB2YWx1ZXMgYXJlIHRoZSBjb21wb25lbnQgaW5wdXQgdmFsdWVzLlxyXG4gICAqIChzZWUgY3VycmVuY3ktZGlzcGxheSBpbnRvIHNoZWxsL2xheW91dC9zcmMvbGliL3VpIGZvbGRlcilcclxuICAgKi9cclxuICBASW5wdXQoKSBwdWJsaWMgc2V0IGZvcm0oZm9ybTogRm9ybUdyb3VwKSB7XHJcbiAgICB0aGlzLmtleXMgPSBrZXlzKGZvcm0uY29udHJvbHMpO1xyXG4gICAgdGhpcy52YWx1ZXMgPSBmb3JtLnZhbHVlO1xyXG4gICAgZm9ybS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy52YWx1ZXMgPSBkYXRhKTtcclxuICB9XHJcbn1cclxuIl19