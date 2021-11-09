import { ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { DirectivesModule } from '@gorilainvest/ui-toolkit/directives';
import { ICON_BASE_SRC, IconModule } from '@gorilainvest/ui-toolkit/icon';

import { LetterheadHeaderComponent } from './header.component';

describe('LetterheadHeaderComponent', () => {
  let component: LetterheadHeaderComponent;
  let fixture: ComponentFixture<LetterheadHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        LetterheadHeaderComponent
      ],
      imports: [
        RouterTestingModule,
        IconModule,
        DirectivesModule
      ],
      providers: [{ provide: ICON_BASE_SRC, useValue: 'https://s3.amazonaws.com/gorila-images/app/' }]
    }).overrideComponent(LetterheadHeaderComponent, { set: {
      changeDetection: ChangeDetectionStrategy.Default
    }})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterheadHeaderComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe('Test view', () => {

    const iconsList = [{ name: 'PDF', folder: 'Platform/Export', tooltipText: 'PDF', tooltipOrientation: 'top' }];

    const testMain = 'Main Input Text';
    const testSub = 'Sub Input Text';

    beforeEach(() => {
      component.iconList = iconsList;
      component.rightMain = testMain;
      component.rightSub = testSub;

      fixture.detectChanges();
    });

    it(`should display ${iconsList.length} icons`, () => {
      const icons = fixture.debugElement.queryAll(By.css('.icon'));
      expect(icons.length).toBe(iconsList.length);
    });


    it('should display icon tooltip when tooltipText is truthy', () => {
      const tooltip = fixture.debugElement.query(By.css('[gortippy]'));
      expect(tooltip).toBeTruthy();
    });

    it('shouldnt display icon tooltip when tooltipText is false', () => {
      component.iconList = [{ name: 'PDF', folder: 'Platform/Export' }];
      fixture.detectChanges();
      const tooltip = fixture.debugElement.query(By.css('[gortippy]'));
      expect(tooltip).toBeNull();
    });


    it(`should emit '${iconsList[0].name}' value when click on ${iconsList[0].name} icon`, () => {
      spyOn(component.iconClick, 'emit');
      const icons = fixture.debugElement.queryAll(By.css('.icon'));
      icons[0].nativeElement.click();
      expect(component.iconClick.emit).toHaveBeenCalledWith(iconsList[0].name);
    });

    it(`it should display ${testMain} for right main text`, () => {
      const mainText = fixture.debugElement.query(By.css('.right.main')).nativeElement.textContent.trim();
      expect(mainText).toBe(testMain);
    });

    it(`it should display ${testSub} for right main text`, () => {
      const subText = fixture.debugElement.query(By.css('.right.sub')).nativeElement.textContent.trim();
      expect(subText).toBe(testSub);
    });

    it('should display the label template when right main input has label and value', () => {
      const rightLabel = 'Main label: ';
      const rightValue = 'Main Value';
      component.rightMain = {
        label: rightLabel,
        value: rightValue
      };
      fixture.detectChanges();
      const rightText = fixture.debugElement.query(By.css('.right.main')).nativeElement.textContent.trim();
      expect(rightText).toEqual(rightLabel + rightValue);
    });
  });
});
