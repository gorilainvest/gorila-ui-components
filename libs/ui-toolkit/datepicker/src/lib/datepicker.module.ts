import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ButtonModule } from '@gorilainvest/ui-toolkit/button';

import { CalendarHeaderComponent } from './calendar-header.component';
import { DatepickerContentComponent } from './datepicker-content.component';
import { DatepickerToggleComponent } from './datepicker-toggle.component';
import { DatepickerComponent } from './datepicker.component';
import { DatepickerModeService } from './datepicker-mode.service';

/** @ignore */
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
    CalendarHeaderComponent,
  ],
  providers: [ DatepickerModeService ],
  exports: [
    DatepickerComponent,
    DatepickerContentComponent,
    DatepickerToggleComponent,
    CalendarHeaderComponent
  ],
  entryComponents: [
    CalendarHeaderComponent,
    DatepickerContentComponent
  ]
};

@NgModule(MODULE_METADATA)
export class DatepickerModule {}
