import { DatepickerToggleComponent } from './datepicker-toggle.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule,MatMonthView } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '@gorilainvest/ui-toolkit/button';
import { DatepickerComponent } from './datepicker.component';
import { DatepickerContentComponent } from './datepicker-content.component';
import { CalendarHeaderComponent } from './calendar-header.component';

export const MODULE_METADATA = {
  imports: [
    CommonModule,
    ButtonModule,
    MatButtonModule,
    MatDatepickerModule,
    MatMomentDateModule
  ],
  declarations: [
    DatepickerComponent,
    DatepickerContentComponent,
    DatepickerToggleComponent,
    CalendarHeaderComponent
  ],
  exports: [
    DatepickerComponent,
    DatepickerContentComponent,
    DatepickerToggleComponent
  ],
  entryComponents: [
    CalendarHeaderComponent,
    DatepickerContentComponent
  ]
};

@NgModule(MODULE_METADATA)
export class DatepickerModule {}
