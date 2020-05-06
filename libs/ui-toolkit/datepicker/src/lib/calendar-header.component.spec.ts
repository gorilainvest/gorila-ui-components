import { CommonModule } from '@angular/common';
import { DebugElement, ChangeDetectorRef } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatCalendar } from '@angular/material/datepicker';
import { Moment, utc } from 'moment';

import { CalendarHeaderComponent } from './calendar-header.component';
import { DatepickerModule } from './datepicker.module';

class ChangeDetector implements ChangeDetectorRef {
  static __NG_ELEMENT_ID__: () => ChangeDetectorRef = () => null;
  public markForCheck() {}
  public detach(){}
  public detectChanges(){}
  public checkNoChanges(){}
  public reattach() {}
}

describe('CalendarHeaderComponent', () => {
  let component: CalendarHeaderComponent<Moment>;
  let fixture: ComponentFixture<CalendarHeaderComponent<Moment>>;
  let de: DebugElement;
  const today = utc();

  const beforeEachFn = () => {
    fixture = TestBed.createComponent(CalendarHeaderComponent) as ComponentFixture<CalendarHeaderComponent<Moment>>;
    component = fixture.componentInstance;
    de = fixture.debugElement;
    component.calendar.activeDate = today;
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DatepickerModule,
        MatMomentDateModule,
      ],
      providers: [
        MatCalendar,
        { provide: ChangeDetectorRef, useClass: ChangeDetector }
      ]
    }).compileComponents();
  }));

  describe('testing currentPeriodClicked', () => {

    beforeEach(beforeEachFn);

    it('expect mode=year-only to keep currentView=multi-year', () => {
      component.mode = 'year-only';
      component.currentPeriodClicked();
      fixture.detectChanges();
      expect(component.calendar.currentView).toEqual('multi-year');
    });

    it('expect mode=year-month to change currentView to multi-year when currentView is year', () => {
      component.mode = 'year-month';
      component.calendar.currentView = 'year';
      component.currentPeriodClicked();
      fixture.detectChanges();
      expect(component.calendar.currentView).toEqual('multi-year');
    });

    it('expect mode=year-month to change currentView to year when currentView is multi-year', () => {
      component.mode = 'year-month';
      component.calendar.currentView = 'multi-year';
      component.currentPeriodClicked();
      fixture.detectChanges();
      expect(component.calendar.currentView).toEqual('year');
    });

  });

});
