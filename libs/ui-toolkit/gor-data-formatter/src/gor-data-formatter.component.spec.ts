import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GorDataFormatterComponent } from './gor-data-formatter.component';
import { GorDataFormatterModule } from './gor-data-formatter.module';

describe('GorDataFormatterComponent', () => {
  let component: GorDataFormatterComponent;
  let fixture: ComponentFixture<GorDataFormatterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GorDataFormatterModule]
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
