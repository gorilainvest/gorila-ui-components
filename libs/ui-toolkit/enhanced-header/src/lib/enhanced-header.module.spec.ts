import { TestBed, waitForAsync } from '@angular/core/testing';
import { EnhancedHeaderModule } from './enhanced-header.module';

describe('EnhancedHeaderModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [EnhancedHeaderModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(EnhancedHeaderModule).toBeDefined();
  });
});
