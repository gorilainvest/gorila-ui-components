import { DatepickerContentComponent } from './datepicker-content.component';
import { Component, AfterViewInit, Input, HostBinding, ViewEncapsulation, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { ComponentType, ComponentPortal } from '@angular/cdk/portal';
import { MatCalendar, MatCalendarView, MatDatepicker } from '@angular/material/datepicker';
import { CalendarHeaderComponent } from './calendar-header.component';
import { take } from 'rxjs/operators';

export const SELECTOR = 'gor-datepicker';

/**
 * Component responsible for managing the datepicker popup/dialog.
 *
 * @link https://github.com/angular/components/blob/master/src/material/datepicker/datepicker.ts
 */
@Component({
  selector: SELECTOR,
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'gorDatepicker',
  encapsulation: ViewEncapsulation.None
})
export class DatepickerComponent<D> extends MatDatepicker<D> {

  private getPrivateMember(p: string) {
    const m = this[p];

    if (!m) {
      console.error(`Member ${p} doesn't exist in MatDatepicker!`);
    }

    return m;
  }

  private setValueToPrivateMember(p: string, v: any) {
    if (!this[p]) {
      console.error(`Member ${p} doesn't exist in MatDatepicker!`);
    }

    this[p] = v;
  }

  /** Open the calendar. */
  open(): void {
    const _document = this.getPrivateMember('_document');

    if (this.getPrivateMember('_opened') || this.disabled) {
      return;
    }
    if (!this._datepickerInput) {
      throw Error('Attempted to open an MatDatepicker with no associated input.');
    }
    if (_document) {
      this.setValueToPrivateMember('_focusedElementBeforeOpen', _document.activeElement);
    }

    this.touchUi ? this.openAsDialog() : this.openAsPopup();
    this.setValueToPrivateMember('_opened', true);
    this.openedStream.emit();
  }

  /** Open the calendar as a dialog. */
  private openAsDialog() {
    const _dialog = this.getPrivateMember('_dialog');
    const _dir = this.getPrivateMember('_dir');

    // Usually this would be handled by `open` which ensures that we can only have one overlay
    // open at a time, however since we reset the variables in async handlers some overlays
    // may slip through if the user opens and closes multiple times in quick succession (e.g.
    // by holding down the enter key).
    if (this.getPrivateMember('_dialogRef')) {
      this.getPrivateMember('_dialogRef').close();
    }

    this.setValueToPrivateMember(
      '_dialogRef',
      _dialog.open<DatepickerContentComponent<D>>(DatepickerContentComponent, {
        direction: _dir ? _dir.value : 'ltr',
        viewContainerRef: this.getPrivateMember('_viewContainerRef'),
        panelClass: 'mat-datepicker-dialog'
      })
    );

    this.getPrivateMember('_dialogRef')
      .afterClosed()
      .subscribe(() => this.close());
    this.getPrivateMember('_dialogRef').componentInstance.datepicker = this;
    this.getPrivateMember('_setColor')();
  }

  /** Open the calendar as a popup. */
  private openAsPopup() {
    if (!this.getPrivateMember('_calendarPortal')) {
      this.setValueToPrivateMember(
        '_calendarPortal',
        new ComponentPortal<DatepickerContentComponent<D>>(
          DatepickerContentComponent,
          this.getPrivateMember('_viewContainerRef')
        )
      );
    }

    if (!this._popupRef) {
      this.getPrivateMember('_createPopup')();
    }

    if (!this._popupRef.hasAttached()) {
      this.setValueToPrivateMember(
        '_popupComponentRef',
        this._popupRef.attach(this.getPrivateMember('_calendarPortal'))
      );
      this.getPrivateMember('_popupComponentRef').instance.datepicker = this;
      this.getPrivateMember('_setColor')();

      // Update the position once the calendar has rendered.
      this.getPrivateMember('_ngZone')
        .onStable.asObservable()
        .pipe(take(1))
        .subscribe(() => {
          this._popupRef.updatePosition();
        });
    }
  }
}
