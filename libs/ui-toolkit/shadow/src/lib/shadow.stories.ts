import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { ShadowType, getShadowTypes } from './shadow.model';
import { ShadowModule } from './shadow.module';

@Component({
  selector: 'gor-host',
  template: `
    <div
    [style.background-color]="'#fff'"
    [style.width]="'1000px'"
    >
      <gor-shadow
        [displayShadow]="displayShadow"
        [shadowType]="shadowType"
      >
        CONTENT
      </gor-shadow>
      <mat-checkbox
        [(ngModel)]="displayShadow"
        [style.display]="'block'"
        class="gorila-primary"
      >
        display shadow
      </mat-checkbox>
      <mat-select [(value)]="shadowType" [style.width]="'200px'">
        <mat-option *ngFor="let type of types" [value]="type">{{ type }}</mat-option>
      </mat-select>
    </div>
  `
})
class HostComponent {
  public displayShadow = true;
  public types = getShadowTypes();
  public shadowType: ShadowType = ShadowType.DEFAULT;
}

storiesOf('Shadow', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        ShadowModule,
        MatCheckboxModule,
        MatSelectModule,
      ],
      declarations: [HostComponent]
    }))
  .add('playground', () => ({
    template: `
      <gor-host></gor-host>
    `
  }));
