import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from "@angular/platform-browser";

import { LoadingComponent } from './loading.component';

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display message passed', () => {
    component.message = 'test message';
    fixture.detectChanges();
    const message = fixture.debugElement.query(By.css('#message')).nativeElement.textContent.trim();
    expect(message).toBe('test message');
  });

  it('should display component when stopLoading === false', () => {
    component.stopLoading = false;
    fixture.detectChanges();
    const spinner = fixture.debugElement.query(By.css('.loading-spinner'));
    expect(spinner).toBeTruthy();
  })

  it('should hide component when stopLoading === true', () => {
    component.stopLoading = true;
    fixture.detectChanges();
    const spinner = fixture.debugElement.query(By.css('.loading-spinner'));
    expect(spinner).toBeFalsy();
  })
});
