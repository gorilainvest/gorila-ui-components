import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { GorDataFormatterModule } from '@gorilainvest/ui-toolkit/gor-data-formatter';

import { GorDataFormatterComponent } from './gor-data-formatter.component';

describe('GorDataFormatterComponent', () => {
  let component: GorDataFormatterComponent;
  let fixture: ComponentFixture<GorDataFormatterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GorDataFormatterModule, NoopAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GorDataFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
