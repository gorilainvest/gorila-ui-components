/* istanbul ignore file Code copied from Angular Material team, work as is */

import { Component, ChangeDetectionStrategy, HostBinding, HostListener, OnDestroy, OnInit, Input } from '@angular/core';
import { MatDatepickerToggle } from '@angular/material/datepicker';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { combineLatest } from 'rxjs';

/** @ignore */
export const SELECTOR = 'gor-datepicker-toggle';

/**
 * Extends MatDatepickerToggle to insert our custom calendar icon.
 * 
 * @link https://github.com/angular/components/blob/master/src/material/datepicker/datepicker-toggle.ts
 */
@Component({
  selector: SELECTOR,
  templateUrl: './datepicker-toggle.component.html',
  styleUrls: ['./datepicker-toggle.component.scss'],
  exportAs: 'gorDatepickerToggle',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatepickerToggleComponent<D> extends MatDatepickerToggle<D> implements OnDestroy, OnInit {
  /**
   * Indicates that the toggle must continue to be active on date selected.
   */
  @Input() public activeOnSelect = false;

  /**
   * Set readonly tabIndex for toggle component.
   */
  @HostBinding('attr.tabindex') public readonly tabIndex = -1;
  
  /**
   * Set a css class equal to component selector.
   */
  @HostBinding('class') public readonly hostClass = SELECTOR;
  
  /**
   * Indicates if associated datepicker is active.
   */
  @HostBinding('class.mat-datepicker-toggle-active') public active = this.datepicker && this.datepicker.opened;

  /**
   * Indicates if current datepicker color palette is accent.
   */
  @HostBinding('class.mat-accent') public readonly accentColor = this.datepicker && this.datepicker.color === 'accent';
  
  /**
   * Indicates if current datepicker color palette is warn.
   */
  @HostBinding('class.mat-warn') public readonly warnColor = this.datepicker && this.datepicker.color === 'warn';

  /**
   * Listen to focus event on component to force focus on button.
   */
  @HostListener('focus') public setFocus() {
    this._button.focus();
  }

  public ngOnInit() {
    this.datepicker.openedStream.pipe(untilDestroyed(this)).subscribe(() => this.active = true);
    combineLatest([
      this.datepicker.closedStream,
      this.datepicker._selectedChanged
    ]).pipe(untilDestroyed(this)).subscribe(([_, selected]) => {
      if (!this.activeOnSelect) {
        this.active = false;
        return;
      }

      try {
        const startAt = this.datepicker.startAt;
        if ('format' in selected && 'format' in startAt) {
          this.active = selected['format']() === startAt['format']();
        } else {
          this.active = selected.toString() === startAt.toString();
        }
      } catch (e) {
        console.error(e);
        this.active = false;
      }
    });
    
  }

  public ngOnDestroy() {
    super.ngOnDestroy();
  }
}
