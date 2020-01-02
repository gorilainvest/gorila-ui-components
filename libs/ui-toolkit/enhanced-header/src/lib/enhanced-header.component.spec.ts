import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { EnhancedHeaderComponent } from './enhanced-header.component';
import { EnhancedHeaderModule } from './enhanced-header.module';

describe('EnhancedHeaderComponent', () => {
  let component: EnhancedHeaderComponent;
  let fixture: ComponentFixture<EnhancedHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [EnhancedHeaderModule],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnhancedHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
