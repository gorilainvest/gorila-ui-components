import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GdkImportComponent } from './gdk-import.component';

describe('GdkImportComponent', () => {
  let component: GdkImportComponent;
  let fixture: ComponentFixture<GdkImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GdkImportComponent ]
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
