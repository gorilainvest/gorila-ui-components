import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { EnhancedHeaderComponent } from './enhanced-header.component';
import { EnhancedHeaderModule } from './enhanced-header.module';

describe('EnhancedHeaderComponent', () => {
  let component: EnhancedHeaderComponent;
  let fixture: ComponentFixture<EnhancedHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [EnhancedHeaderModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnhancedHeaderComponent);
    component = fixture.componentInstance;
    component.title = 'Enhanced';
    component.highlight = 'Header';
    component.description = 'Main description';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title and highlight inside gro-enhanced-title', () => {
    const text = fixture.debugElement.query(By.css('gro-enhanced-title')).nativeElement.textContent.trim();
    expect(text).toEqual('Enhanced Header');
  });

  it('should display the description', () => {
    const description = fixture.debugElement.query(By.css('.text')).nativeElement.textContent.trim();
    expect(description).toEqual('Main description');
  });

  it('should display the secondary description when it is truthy', () => {
    component.description2 = 'Secondary description';
    fixture.detectChanges();
    const secondaryDescription = fixture.debugElement.query(By.css('.secondTextBlock')).nativeElement.textContent.trim();
    expect(secondaryDescription).toEqual('Secondary description');
  });

  it('should have a tooltip when tooltipText is truthy', () => {
    component.tooltipText = 'Tooltip text';
    fixture.detectChanges();
    const tooltip = fixture.debugElement.query(By.css('gor-tooltip')).nativeElement;
    expect(tooltip).toBeTruthy();
  });
});
