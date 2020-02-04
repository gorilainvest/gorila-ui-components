import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GdkJsonInputComponent } from './gdk-json-input.component';

describe('JsonInputComponent', () => {
  let component: GdkJsonInputComponent;
  let fixture: ComponentFixture<GdkJsonInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GdkJsonInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GdkJsonInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
