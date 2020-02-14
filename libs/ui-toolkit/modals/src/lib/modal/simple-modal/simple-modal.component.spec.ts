import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material';
import { By } from '@angular/platform-browser';
import { PipesModule } from '@gorilainvest/ui-toolkit/pipes';

import { SimpleModalComponent } from './simple-modal.component';

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
    component.data.titleText = 'Title';
    component.data.bodyText = 'Body content';
    component.data.yesText = 'Primary Button';
    component.data.noText = 'Secundary Button';
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display the modal title', () => {
    const title = fixture.debugElement.query(By.css('h2')).nativeElement.textContent.trim();
    expect(title).toEqual('Title');
  });

  it('should display the modal body text if data has bodyText', () => {
    const text = fixture.debugElement.query(By.css('p')).nativeElement.textContent.trim();
    expect(text).toEqual('Body content');
  });

  it('should display primary button if data has yesText', () => {
    const primaryButton = fixture.debugElement.query(By.css('.green')).nativeElement;
    expect(primaryButton).toBeTruthy();
  });

  it('should display secondary button if data has noText', () => {
    const secondaryButton = fixture.debugElement.query(By.css('.gray')).nativeElement;
    expect(secondaryButton).toBeTruthy();
  });
});
