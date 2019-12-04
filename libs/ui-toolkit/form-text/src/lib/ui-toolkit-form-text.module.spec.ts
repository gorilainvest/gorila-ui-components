import { async, TestBed } from '@angular/core/testing';
import { FormTextModule } from './form-text.module';

describe('FormTextModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormTextModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FormTextModule).toBeDefined();
  });
});
