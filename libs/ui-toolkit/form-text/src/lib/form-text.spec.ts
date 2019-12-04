import { async, TestBed } from '@angular/core/testing';
import { FormTextComponent } from './form-text.component';

describe('FormTextComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormTextComponent]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FormTextComponent).toBeDefined();
  });
});
