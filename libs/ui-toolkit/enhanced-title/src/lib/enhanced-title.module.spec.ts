import { TestBed, waitForAsync } from '@angular/core/testing';
import { EnhancedTitleModule } from './enhanced-title.module';

describe('EnhancedTitleModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [EnhancedTitleModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(EnhancedTitleModule).toBeDefined();
  });
});
