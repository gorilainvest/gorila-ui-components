import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { PresentationalShellModule } from '../../presentational-shell.module';
import { InfoBoxComponent } from './info-box.component';

describe('InfoBoxComponent', () => {
  let component: InfoBoxComponent;
  let fixture: ComponentFixture<InfoBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PresentationalShellModule, NoopAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

