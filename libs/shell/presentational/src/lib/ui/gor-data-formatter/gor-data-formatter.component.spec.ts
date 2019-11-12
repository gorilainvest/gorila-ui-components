import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GorDataFormatterComponent } from './gor-data-formatter.component';

describe('GorDataFormatterComponent', () => {
  let component: GorDataFormatterComponent;
  let fixture: ComponentFixture<GorDataFormatterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GorDataFormatterComponent]
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
