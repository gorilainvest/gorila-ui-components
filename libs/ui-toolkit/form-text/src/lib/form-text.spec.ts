import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { FormTextComponent } from './form-text.component';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

describe('FormTextComponent', () => {
  let component: FormTextComponent;
  let fixture: ComponentFixture<FormTextComponent>;
  
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule
      ],
      declarations: [FormTextComponent]
    }).compileComponents();
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(FormTextComponent);
    component = fixture.componentInstance;
    component.control = new FormControl();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(FormTextComponent).toBeTruthy();
  });
  
  it('should display hint about max char and charactere count for input text', () => {
    const mockText = 'text to test form text component behavior';
    const hintText = 'hint text';
    component.control.setValue(mockText);
    component.control.updateValueAndValidity();
    component.displayCount = true;
    component.hint = hintText;
    fixture.detectChanges();

    const inputHint = fixture.debugElement.query(By.css('div.mat-hint')).nativeElement.textContent.trim();
    const charCounter = fixture.debugElement.query(By.css('mat-hint')).nativeElement.textContent.trim();
    expect(inputHint).toBe(hintText, 'expect left hint to diplay input text max characteres');
    expect(charCounter).toContain(`${mockText.length}`, 'expect right hint to display characteres number counter');
  });
});
