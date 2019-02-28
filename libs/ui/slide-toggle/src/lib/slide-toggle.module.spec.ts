import { async, TestBed } from '@angular/core/testing';
import { SlideToggleModule } from './slide-toggle.module';

describe('SlideToggleModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SlideToggleModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SlideToggleModule).toBeDefined();
  });
});
