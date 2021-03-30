import { TestBed, waitForAsync } from '@angular/core/testing';
import { TooltipModule } from './tooltip.module';

describe('TooltipModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TooltipModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TooltipModule).toBeDefined();
  });
});
