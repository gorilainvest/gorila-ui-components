import { TestBed, waitForAsync } from '@angular/core/testing';
import { ICON_BASE_SRC } from '@gorilainvest/ui-toolkit/icon';

import { SortHeaderModule } from './sort-header.module';

describe('SortHeaderModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SortHeaderModule],
      providers: [
        { provide: ICON_BASE_SRC, useValue: 'https://s3.amazonaws.com/gorila-images/app/' }
      ]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SortHeaderModule).toBeDefined();
  });
});
