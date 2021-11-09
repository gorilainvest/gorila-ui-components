import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { DataFormatterComponent } from './data-formatter.component';
import { DataFormatterModule } from './data-formatter.module';

describe('DataFormatterComponent', () => {
  let component: DataFormatterComponent;
  let fixture: ComponentFixture<DataFormatterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [DataFormatterModule, TranslateModule.forRoot()]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
