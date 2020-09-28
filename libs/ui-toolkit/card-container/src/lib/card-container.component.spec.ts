import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SectionTitleModule } from '@gorilainvest/ui-toolkit/section-title';
import { ShadowModule } from '@gorilainvest/ui-toolkit/shadow';

import { CardContainerComponent } from './card-container.component';

describe('CardContainerComponent', () => {
  let component: CardContainerComponent;
  let fixture: ComponentFixture<CardContainerComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [CardContainerComponent],
      imports: [SectionTitleModule, ShadowModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the colored upper ribbon', () => {
    component.cssClass = 'asset-gradient';
    fixture.detectChanges();
    const upperRibbon = fixture.debugElement.query(By.css('.card-top.asset-gradient')).nativeElement;
    expect(upperRibbon).toBeTruthy();
  });

  it('should display the title', () => {
    component.title = 'Title';
    fixture.detectChanges();
    const title = fixture.debugElement.query(By.css('gor-section-title')).nativeElement.textContent.trim();
    expect(title).toEqual('Title');
  });

  it('should display the shadow if displayShadow is true', () => {
    component.displayShadow = true;
    fixture.detectChanges();
    const shadow = fixture.debugElement.query(By.css('gor-shadow')).nativeElement;
    expect(shadow).toBeTruthy();
  });
});
