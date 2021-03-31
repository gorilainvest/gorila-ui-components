import { TestBed, waitForAsync } from '@angular/core/testing';
import { ScrollContainerModule } from './scroll-container.module';

describe('ScrollContainerModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ScrollContainerModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ScrollContainerModule).toBeDefined();
  });
});
