import { async, TestBed } from '@angular/core/testing';
import { LetterheadModule } from './letterhead.module';

describe('LetterheadModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LetterheadModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LetterheadModule).toBeDefined();
  });
});
