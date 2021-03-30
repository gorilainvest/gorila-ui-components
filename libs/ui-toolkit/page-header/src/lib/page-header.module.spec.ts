import { TestBed, waitForAsync } from '@angular/core/testing';
import { PageHeaderModule } from './page-header.module';

describe('PageHeaderModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PageHeaderModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PageHeaderModule).toBeDefined();
  });
});
