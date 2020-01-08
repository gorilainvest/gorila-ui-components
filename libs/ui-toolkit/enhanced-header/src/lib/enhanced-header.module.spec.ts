import { async, TestBed } from '@angular/core/testing';
import { EnhancedHeaderModule } from './enhanced-header.module';

describe('EnhancedHeaderModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [EnhancedHeaderModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(EnhancedHeaderModule).toBeDefined();
  });
});
