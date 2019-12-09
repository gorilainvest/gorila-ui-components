// Based on https://netbasal.com/creating-powerful-components-with-angular-cdk-2cef53d81cea
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopoverService } from './popover.service';
import { PopoverComponent } from './popover.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PopoverComponent],
  entryComponents: [PopoverComponent],
  providers: [
    PopoverService
  ]
})
export class PopoverModule {}
