import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LetterheadFooterComponent } from './footer.component';
import { By } from '@angular/platform-browser';

describe('LetterheadFooterComponent', () => {
  let component: LetterheadFooterComponent;
  let fixture: ComponentFixture<LetterheadFooterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        LetterheadFooterComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterheadFooterComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe('Test view', () => {
    const testLeftMain = 'Left Main Input Text';
    const testLeftSub = 'Left Sub Input Text';
    const testMiddleMain = 'Middle Main Input Text';
    const testMiddleSub = 'Middle Sub Input Text';

    beforeEach(() => {
      component.leftMain = testLeftMain;
      component.leftSub = testLeftSub;
      component.middleMain = testMiddleMain;
      component.middleSub = testMiddleSub;

      fixture.detectChanges();
    });

    it(`it should display ${testLeftMain} for left main text`, () => {
      const mainText = fixture.debugElement.query(By.css('.left.main')).nativeElement.textContent.trim();
      expect(mainText).toBe(testLeftMain);
    });

    it(`it should display ${testLeftSub} for right left text`, () => {
      const subText = fixture.debugElement.query(By.css('.left.sub')).nativeElement.textContent.trim();
      expect(subText).toBe(testLeftSub);
    });

    it(`it should display ${testMiddleMain} for right main text`, () => {
      const mainText = fixture.debugElement.query(By.css('.middle.main')).nativeElement.textContent.trim();
      expect(mainText).toBe(testMiddleMain);
    });

    it(`it should display ${testMiddleSub} for right main text`, () => {
      const subText = fixture.debugElement.query(By.css('.middle.sub')).nativeElement.textContent.trim();
      expect(subText).toBe(testMiddleSub);
    });
  });
});
