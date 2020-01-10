/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { keys } from 'ramda';
var GdkImportComponent = /** @class */ (function () {
    function GdkImportComponent() {
        this.moduleNameStr = '';
        this.moduleTitle = '';
        /**
         * The prefix input. Can be gorilainvest, gro, gor, etc
         */
        this.prefix = '';
        this.keys = [];
        this.values = {};
    }
    Object.defineProperty(GdkImportComponent.prototype, "moduleName", {
        /**
         * The name of module separeted by hyphen without module prefix
         * E.G. CardContainerModule send card-container as input but not gorilainvest-card-container.
         * the prefix you must sent in the prefix input
         */
        set: /**
         * The name of module separeted by hyphen without module prefix
         * E.G. CardContainerModule send card-container as input but not gorilainvest-card-container.
         * the prefix you must sent in the prefix input
         * @param {?} moduleName
         * @return {?}
         */
        function (moduleName) {
            this.moduleNameStr = moduleName;
            this.moduleTitle = moduleName.split('-').map((/**
             * @param {?} name
             * @return {?}
             */
            function (name) { return name.charAt(0).toUpperCase() + name.slice(1); })).join('');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GdkImportComponent.prototype, "form", {
        /**
         * A form group where the keys are the component input names and
         * the values are the component input values.
         * (see currency-display into shell/layout/src/lib/ui folder)
         */
        set: /**
         * A form group where the keys are the component input names and
         * the values are the component input values.
         * (see currency-display into shell/layout/src/lib/ui folder)
         * @param {?} form
         * @return {?}
         */
        function (form) {
            var _this = this;
            this.keys = keys(form.controls);
            this.values = form.value;
            form.valueChanges.subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return _this.values = data; }));
        },
        enumerable: true,
        configurable: true
    });
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
    return GdkImportComponent;
}());
export { GdkImportComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RrLWltcG9ydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ29yaWxhaW52ZXN0L2dkay8iLCJzb3VyY2VzIjpbImxpYi9nZGstaW1wb3J0L2dkay1pbXBvcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUU3QjtJQUFBO1FBT1Msa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDbkIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7Ozs7UUFnQlIsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUVyQixTQUFJLEdBQWEsRUFBRSxDQUFDO1FBQ3BCLFdBQU0sR0FBdUIsRUFBRSxDQUFDO0lBYXpDLENBQUM7SUF6QkMsc0JBQW9CLDBDQUFVO1FBTDlCOzs7O1dBSUc7Ozs7Ozs7O1FBQ0gsVUFBK0IsVUFBVTtZQUN2QyxJQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQztZQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRzs7OztZQUFDLFVBQUMsSUFBWSxJQUFLLE9BQUEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUE1QyxDQUE0QyxFQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hILENBQUM7OztPQUFBO0lBaUJELHNCQUFvQixvQ0FBSTtRQUx4Qjs7OztXQUlHOzs7Ozs7OztRQUNILFVBQXlCLElBQWU7WUFBeEMsaUJBSUM7WUFIQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztZQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLEVBQWxCLENBQWtCLEVBQUMsQ0FBQztRQUMxRCxDQUFDOzs7T0FBQTs7Z0JBdkNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIscTBDQUEwQztvQkFFMUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN0Qzs7OzZCQVVFLEtBQUs7eUJBU0wsS0FBSzt1QkFXTCxLQUFLOztJQUtSLHlCQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7U0FsQ1ksa0JBQWtCOzs7SUFDN0IsMkNBQTBCOztJQUMxQix5Q0FBd0I7Ozs7O0lBZ0J4QixvQ0FBNEI7O0lBRTVCLGtDQUEyQjs7SUFDM0Isb0NBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBrZXlzIH0gZnJvbSAncmFtZGEnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZGstaW1wb3J0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZ2RrLWltcG9ydC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZ2RrLWltcG9ydC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIEdka0ltcG9ydENvbXBvbmVudCB7XHJcbiAgcHVibGljIG1vZHVsZU5hbWVTdHIgPSAnJztcclxuICBwdWJsaWMgbW9kdWxlVGl0bGUgPSAnJztcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIG5hbWUgb2YgbW9kdWxlIHNlcGFyZXRlZCBieSBoeXBoZW4gd2l0aG91dCBtb2R1bGUgcHJlZml4XHJcbiAgICogRS5HLiBDYXJkQ29udGFpbmVyTW9kdWxlIHNlbmQgY2FyZC1jb250YWluZXIgYXMgaW5wdXQgYnV0IG5vdCBnb3JpbGFpbnZlc3QtY2FyZC1jb250YWluZXIuXHJcbiAgICogdGhlIHByZWZpeCB5b3UgbXVzdCBzZW50IGluIHRoZSBwcmVmaXggaW5wdXRcclxuICAgKi9cclxuICBASW5wdXQoKSBwdWJsaWMgc2V0IG1vZHVsZU5hbWUobW9kdWxlTmFtZSkge1xyXG4gICAgdGhpcy5tb2R1bGVOYW1lU3RyID0gbW9kdWxlTmFtZTtcclxuICAgIHRoaXMubW9kdWxlVGl0bGUgPSBtb2R1bGVOYW1lLnNwbGl0KCctJykubWFwKChuYW1lOiBzdHJpbmcpID0+IG5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnNsaWNlKDEpKS5qb2luKCcnKTtcclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBUaGUgcHJlZml4IGlucHV0LiBDYW4gYmUgZ29yaWxhaW52ZXN0LCBncm8sIGdvciwgZXRjXHJcbiAgICovXHJcbiAgQElucHV0KCkgcHVibGljIHByZWZpeCA9ICcnO1xyXG5cclxuICBwdWJsaWMga2V5czogc3RyaW5nW10gPSBbXTtcclxuICBwdWJsaWMgdmFsdWVzOiB7W3M6IHN0cmluZ106IGFueX0gPSB7fTtcclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEEgZm9ybSBncm91cCB3aGVyZSB0aGUga2V5cyBhcmUgdGhlIGNvbXBvbmVudCBpbnB1dCBuYW1lcyBhbmRcclxuICAgKiB0aGUgdmFsdWVzIGFyZSB0aGUgY29tcG9uZW50IGlucHV0IHZhbHVlcy5cclxuICAgKiAoc2VlIGN1cnJlbmN5LWRpc3BsYXkgaW50byBzaGVsbC9sYXlvdXQvc3JjL2xpYi91aSBmb2xkZXIpXHJcbiAgICovXHJcbiAgQElucHV0KCkgcHVibGljIHNldCBmb3JtKGZvcm06IEZvcm1Hcm91cCkge1xyXG4gICAgdGhpcy5rZXlzID0ga2V5cyhmb3JtLmNvbnRyb2xzKTtcclxuICAgIHRoaXMudmFsdWVzID0gZm9ybS52YWx1ZTtcclxuICAgIGZvcm0udmFsdWVDaGFuZ2VzLnN1YnNjcmliZShkYXRhID0+IHRoaXMudmFsdWVzID0gZGF0YSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==