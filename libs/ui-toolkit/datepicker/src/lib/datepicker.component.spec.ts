import { OverlayRef } from '@angular/cdk/overlay';
import { ElementRef } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatDatepickerInput } from '@angular/material/datepicker';
import { MatDialogContainer, MatDialogRef } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Moment } from 'moment';

import { DatepickerComponent } from './datepicker.component';
import { DatepickerModule } from './datepicker.module';

describe('DatepickerComponent', () => {
  let component: DatepickerComponent<Moment>;
  let fixture: ComponentFixture<DatepickerComponent<Moment>>;
  let datepickerInput: MatDatepickerInput<Moment>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DatepickerModule, NoopAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerComponent) as ComponentFixture<DatepickerComponent<Moment>>;
    component = fixture.componentInstance;
    datepickerInput = new MatDatepickerInput(
      new ElementRef(document.createElement('input')),
      TestBed.get(DateAdapter),
      TestBed.get(MAT_DATE_FORMATS),
      null
    );
  });

  it('should not open if was opened previously', () => {
    spyOn<any>(component, 'openAsDialog');
    spyOn<any>(component, 'openAsPopup');
    spyOn(component.openedStream, 'emit');
    // Faking open datepicker
    component['_opened'] = true;

    component.open();

    expect(component['openAsDialog']).not.toHaveBeenCalled();
    expect(component['openAsPopup']).not.toHaveBeenCalled();
    expect(component.openedStream.emit).not.toHaveBeenCalled();
  });

  it('should not open if disabled', () => {
    spyOn<any>(component, 'openAsDialog');
    spyOn<any>(component, 'openAsPopup');
    spyOn(component.openedStream, 'emit');
    component.disabled = true;

    component.open();

    expect(component['openAsDialog']).not.toHaveBeenCalled();
    expect(component['openAsPopup']).not.toHaveBeenCalled();
    expect(component.openedStream.emit).not.toHaveBeenCalled();
  });

  it('should close dialog before opening another', () => {
    const fakeDialogRef = new MatDialogRef(
      new OverlayRef(null, null, null, {}, null, null, null),
      new MatDialogContainer(null, null, null, null, {})
    );
    spyOn(fakeDialogRef, 'close');
    component['_dialogRef'] = fakeDialogRef;
    component.touchUi = true;
    component._datepickerInput = datepickerInput;

    component.open();

    expect(fakeDialogRef.close).toHaveBeenCalled();
  });

  it('should open dialog in touch screen devices', () => {
    spyOn<any>(component, 'openAsDialog');
    spyOn<any>(component, 'openAsPopup');
    spyOn(component.openedStream, 'emit');
    component.touchUi = true;
    component._datepickerInput = datepickerInput;

    component.open();

    expect(component['openAsDialog']).toHaveBeenCalled();
    expect(component['openAsPopup']).not.toHaveBeenCalled();
    expect(component.openedStream.emit).toHaveBeenCalled();
  });

  it('should open popup in non-touch screen devices', () => {
    spyOn<any>(component, 'openAsDialog');
    spyOn<any>(component, 'openAsPopup');
    spyOn(component.openedStream, 'emit');
    component.touchUi = false;
    component._datepickerInput = datepickerInput;

    component.open();

    expect(component['openAsDialog']).not.toHaveBeenCalled();
    expect(component['openAsPopup']).toHaveBeenCalled();
    expect(component.openedStream.emit).toHaveBeenCalled();
  });
});
