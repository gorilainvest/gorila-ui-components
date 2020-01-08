import { async, TestBed } from '@angular/core/testing';
import { TooltipModule } from './tooltip.module';

describe('TooltipModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TooltipModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TooltipModule).toBeDefined();
  });
});
