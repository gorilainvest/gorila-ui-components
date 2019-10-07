import { async, TestBed } from '@angular/core/testing';
import { EnhancedTitleModule } from './enhanced-title.module';

describe('EnhancedTitleModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [EnhancedTitleModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(EnhancedTitleModule).toBeDefined();
  });
});
