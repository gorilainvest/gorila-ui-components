import { TemplateRef, Type } from '@angular/core';
import { OverlayRef } from '@angular/cdk/overlay';
import { Subject } from 'rxjs';
/**
 * @interface PopoverCloseEvent
 */
export interface PopoverCloseEvent<T> {
 type: 'backdropClick' | 'close';
 data: T;
};

/**
 * @type PopoverContent
 */
export type PopoverContent = TemplateRef<any> | Type<any> | string;

/**
 * @class PopoverRef
 * A class used to close popover if backdrop is clicked or if the caller calls close method
 */
export class PopoverRef<T = any> {
 private afterClosed = new Subject<PopoverCloseEvent<T>>();
 public afterClosed$ = this.afterClosed.asObservable();

 constructor(public overlay: OverlayRef, public content: PopoverContent, public data: T) {
   overlay.backdropClick().subscribe(() => this._close('backdropClick', data));
 }

/**
 * @method close
 * close the popup manually
 */
 public close(data?: T) {
   this._close('close', data);
 }

/**
 * @method _close
 * close the popup
 */
 private _close(type, data) {
   this.overlay.dispose();
   this.afterClosed.next({
     type,
     data
   });
   this.afterClosed.complete();
 }
}
