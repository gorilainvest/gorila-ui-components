import { ComponentPortal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { take } from 'rxjs/operators';

import { DatepickerContentComponent } from './datepicker-content/datepicker-content.component';
import type { DatePickerMode } from './model/datepicker.model';

/**
 * Component responsible for managing the datepicker popup/dialog.
 *
 * @link https://github.com/angular/components/blob/master/src/material/datepicker/datepicker.ts
 */
@Component({
  selector: 'gor-datepicker',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'gorDatepicker',
  encapsulation: ViewEncapsulation.None
})
export class DatepickerComponent<D> extends MatDatepicker<D> {

  /**
   * Datepicker mode change the component behavior
   * blocking which view modes will be used in calendar's
   * view transition
   *
   * @default "all"
   */
  @Input() public mode: DatePickerMode;

  /**
   * The text to main button of datepicker
   */
  @Input() public applyText: string;

  /**
   * The maximum range date to be selected.
   */
  @Input() public maxDate: D;

  /**
   * The minimum range date to be selected.
   */
  @Input() public minDate: D;

  private callPrivateMember<R>(p: string, ...args: any[]): R {
    /* istanbul ignore else */
    if (p in this) {
      return this[p].call(this, ...args);
    } else {
      console.error(`Can't call inexistent ${p} private member MatDatepicker!`);
    }
  }

  private getPrivateMember(p: string, allowFalsy = false) {
    /* istanbul ignore next */
    if (!(p in this) && !allowFalsy) {
      console.error(`Member ${p} doesn't exist in MatDatepicker!`);
    }

    return this[p];
  }

  private setValueToPrivateMember(p: string, v: any) {
    this[p] = v;
  }

  private cloneStartAt() {
    if (!this.startAt) {
      return this.startAt;
    }

    return typeof this.startAt['clone'] === 'function'
      ? this.startAt['clone']()
      : typeof this.startAt === 'object'
      ? Object.assign({}, this.startAt)
      : this.startAt;
  }

  /** Open the calendar. */
  public open(): void {
    const _document = this.getPrivateMember('_document');

    if (this.getPrivateMember('_opened', true) || this.disabled) {
      return;
    }
    /* istanbul ignore if */
    if (!this._datepickerInput) {
      throw Error('Attempted to open an MatDatepicker with no associated input.');
    }
    if (_document) {
      this.setValueToPrivateMember('_focusedElementBeforeOpen', _document.activeElement);
    }

    this.touchUi ? this.openAsDialog() : this.callPrivateMember('openAsPopup');
    this.setValueToPrivateMember('_opened', true);
    this.openedStream.emit();
  }

  /** Forwards relevant values from the datepicker to the datepicker content inside the overlay. */
  // @ts-ignore
  protected _forwardContentValues(instance: DatepickerContentComponent<D, D>) {
    // @ts-ignore
    instance.datepicker = this;
    instance.color = this.color;
    instance.startAt = this.cloneStartAt();
    instance.mode = this.mode || 'all';
    instance.maxDate = this.maxDate;
    instance.minDate = this.minDate;
    instance.startView = this.startView || 'month';
    instance.applyText = this.applyText || 'Apply';
  }

  /** Open the calendar as a dialog. */
  private openAsDialog() {
    const _dialog = this.getPrivateMember('_dialog');
    const _dir = this.getPrivateMember('_dir');

    // Usually this would be handled by `open` which ensures that we can only have one overlay
    // open at a time, however since we reset the variables in async handlers some overlays
    // may slip through if the user opens and closes multiple times in quick succession (e.g.
    // by holding down the enter key).
    if (this.getPrivateMember('_dialogRef', true)) {
      this.getPrivateMember('_dialogRef').close();
    }

    this.setValueToPrivateMember(
      '_dialogRef',
      _dialog.open<DatepickerContentComponent<D>>(DatepickerContentComponent, {
        direction: /* istanbul ignore next */ _dir ? _dir.value : 'ltr',
        viewContainerRef: this.getPrivateMember('_viewContainerRef'),
        panelClass: 'mat-datepicker-dialog'
      })
    );

    this.getPrivateMember('_dialogRef')
      .afterClosed()
      .subscribe(/* istanbul ignore next */ () => this.close());
    this._forwardContentValues(this.getPrivateMember('_dialogRef'));
  }

  private openAsPopup(): void {
    const portal = new ComponentPortal<DatepickerContentComponent<D, D>>(DatepickerContentComponent,
                                                                  this.getPrivateMember('_viewContainerRef'));

    this.callPrivateMember('_destroyPopup');
    this.callPrivateMember('_createPopup');
    const popupRef = this.getPrivateMember('_popupRef');
    // tslint:disable-next-line
    this.setValueToPrivateMember('_popupComponentRef', popupRef!.attach(portal));
    this._forwardContentValues(this.getPrivateMember('_popupComponentRef').instance);

    // Update the position once the calendar has rendered.
    this.getPrivateMember('_ngZone').onStable.pipe(take(1)).subscribe(() => {
      // tslint:disable-next-line
      popupRef!.updatePosition();
    });
  }
}
