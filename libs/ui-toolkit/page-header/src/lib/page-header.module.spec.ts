import { async, TestBed } from '@angular/core/testing';
import { PageHeaderModule } from './page-header.module';

describe('PageHeaderModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PageHeaderModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PageHeaderModule).toBeDefined();
  });
});
