import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { PresentationalShellModule } from '../../presentational-shell.module';
import { GorDataFormatterComponent } from './gor-data-formatter.component';

describe('GorDataFormatterComponent (shell)', () => {
  let component: GorDataFormatterComponent;
  let fixture: ComponentFixture<GorDataFormatterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PresentationalShellModule, NoopAnimationsModule]
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
