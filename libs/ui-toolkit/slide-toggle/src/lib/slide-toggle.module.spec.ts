import { TestBed, waitForAsync } from '@angular/core/testing';
import { SlideToggleModule } from './slide-toggle.module';

describe('SlideToggleModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SlideToggleModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SlideToggleModule).toBeDefined();
  });
});
