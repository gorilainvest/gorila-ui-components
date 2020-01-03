import { async, TestBed } from '@angular/core/testing';
import { SortHeaderModule } from './sort-header.module';

describe('SortHeaderModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SortHeaderModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SortHeaderModule).toBeDefined();
  });
});
