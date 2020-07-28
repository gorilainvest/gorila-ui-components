import { ChangeDetectionStrategy } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ICON_BASE_SRC, IconModule } from '@gorilainvest/ui-toolkit/icon';

import { LetterheadHeaderComponent } from './header.component';

describe('LetterheadHeaderComponent', () => {
  let component: LetterheadHeaderComponent;
  let fixture: ComponentFixture<LetterheadHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LetterheadHeaderComponent
      ],
      imports: [
        IconModule,
        RouterTestingModule
      ],
      providers: [
        { provide: ICON_BASE_SRC, useValue: 'https://s3.amazonaws.com/gorila-images/app/' }
      ]
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
    const iconsList = ['print', 'lixo'];
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

    it(`should emit '${iconsList[0]}' value when click on ${iconsList[0]} icon`, () => {
      spyOn(component.iconClick, 'emit');
      const icons = fixture.debugElement.queryAll(By.css('.icon'));
      icons[0].nativeElement.click();
      expect(component.iconClick.emit).toHaveBeenCalledWith(iconsList[0]);
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
