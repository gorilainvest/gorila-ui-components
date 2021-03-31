import { TestBed, waitForAsync } from '@angular/core/testing';
import { LetterheadModule } from './letterhead.module';
import { ICON_BASE_SRC } from '@gorilainvest/ui-toolkit/icon';

describe('LetterheadModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [LetterheadModule],
      providers: [{ provide: ICON_BASE_SRC, useValue: 'https://s3.amazonaws.com/gorila-images/app/' }]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LetterheadModule).toBeDefined();
  });
});
