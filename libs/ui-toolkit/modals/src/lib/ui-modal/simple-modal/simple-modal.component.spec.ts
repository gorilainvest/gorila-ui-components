import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material';
import { By } from '@angular/platform-browser';
import { SimpleModalComponent } from './simple-modal.component';
import { PipesModule } from '@gorilainvest/ui-toolkit/pipes';

describe('SimpleModalComponent', () => {
  let component: SimpleModalComponent;
  let fixture: ComponentFixture<SimpleModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule,  PipesModule],
      declarations: [SimpleModalComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleModalComponent);
    component = fixture.componentInstance;
    component.data.titleText = 'Simple Modal Title';
    component.data.bodyText = 'Simple Modal Body Text';
    component.data.yesText = 'Yes';
    component.data.noText = 'No';
    component.data.bodyHtml = '<div>Inserted HTML</div>';
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display the modal title', () => {
    const title = fixture.debugElement.query(By.css('h2')).nativeElement.textContent.trim();
    expect(title).toEqual('Simple Modal Title');
  });

  it('should display the modal body text if data has bodyText', () => {
    const text = fixture.debugElement.query(By.css('p')).nativeElement.textContent.trim();
    expect(text).toEqual('Simple Modal Body Text');
  });

  it('should display primary button if data has yesText', () => {
    const primaryButton = fixture.debugElement.query(By.css('.green')).nativeElement;
    expect(primaryButton).toBeTruthy();
  });

  it('should display secondary button if data has noText', () => {
    const secondaryButton = fixture.debugElement.query(By.css('.gray')).nativeElement;
    expect(secondaryButton).toBeTruthy();
  });

  it('should display body HTML if data has bodyHtml', () => {
    const text = fixture.debugElement.query(By.css('.confirmation-body')).nativeElement.textContent.trim();
    expect(text).toEqual('Inserted HTML');
  });
});
