import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionTitleModule } from '@gorilainvest/ui-toolkit/section-title';

import { CardContainerComponent } from './card-container.component';
import { By } from '@angular/platform-browser';

describe('CardContainerComponent', () => {
  let component: CardContainerComponent;
  let fixture: ComponentFixture<CardContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardContainerComponent],
      imports: [SectionTitleModule]
    }).compileComponents();
  }));

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

    const title = fixture.debugElement.query(By.css('gro-section-title')).nativeElement.textContent.trim();

    expect(title).toEqual('Title');
  });
});
