import { async, TestBed } from '@angular/core/testing';
import { ScrollContainerModule } from './scroll-container.module';

describe('ScrollContainerModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ScrollContainerModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ScrollContainerModule).toBeDefined();
  });
});
