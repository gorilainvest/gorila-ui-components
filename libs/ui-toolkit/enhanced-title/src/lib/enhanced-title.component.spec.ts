import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EnhancedTitleComponent } from './enhanced-title.component';

describe('EnhancedTitleComponent', () => {
  let component: EnhancedTitleComponent;
  let fixture: ComponentFixture<EnhancedTitleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [EnhancedTitleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnhancedTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
