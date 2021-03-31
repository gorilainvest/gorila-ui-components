import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GdkModule } from "../gdk.module";
import { GdkImportComponent } from './gdk-import.component';

describe('GdkImportComponent', () => {
  let component: GdkImportComponent;
  let fixture: ComponentFixture<GdkImportComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [GdkModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GdkImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
