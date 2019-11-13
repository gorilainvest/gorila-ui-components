import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { PresentationalShellModule } from '../../presentational-shell.module';
import { DataFormatterComponent } from './data-formatter.component';

describe('DataFormatterComponent (shell)', () => {
  let component: DataFormatterComponent;
  let fixture: ComponentFixture<DataFormatterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PresentationalShellModule, NoopAnimationsModule]
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
