import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GdkModule } from '../gdk.module';
import { GdkFormComponent } from './gdk-form.component';

describe('GdkFormComponent', () => {
  let component: GdkFormComponent;
  let fixture: ComponentFixture<GdkFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GdkModule],
      // declarations: [GdkFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GdkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
