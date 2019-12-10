import { ChangeDetectionStrategy } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CurrencyDisplayComponent } from './currency-display.component';
import { CurrencyDisplayModule } from './currency-display.module';

describe('CurrencyDisplayComponent', () => {
  let component: CurrencyDisplayComponent;
  let fixture: ComponentFixture<CurrencyDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CurrencyDisplayModule]
    })
    .overrideComponent(CurrencyDisplayComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('CurrencyCode -', () => {
    it('expect invalid currency code to be displayed itself', () => {
      component.currencyCode = 'foo';
      component.ngOnChanges();
      fixture.detectChanges();
      const symbol = fixture.debugElement.query(By.css('.currency-text-symbol')).nativeElement.textContent.trim();
      expect(symbol).toEqual('foo');
    });

    it('expect BRL input to display R$', () => {
      component.currencyCode = 'BRL';
      component.ngOnChanges();
      fixture.detectChanges();
      const symbol = fixture.debugElement.query(By.css('.currency-text-symbol')).nativeElement.textContent.trim();
      expect(symbol).toEqual('R$');
    });
  });

  describe('SymbolDisplay -', () => {
    it('expect symbolDisplay=symbol - BRL to be R$', () => {
      component.symbolDisplay = 'symbol';
      component.currencyCode = 'BRL';
      component.ngOnChanges();
      fixture.detectChanges();
      const symbol = fixture.debugElement.query(By.css('.currency-text-symbol')).nativeElement.textContent.trim();
      expect(symbol).toEqual('R$');
    });

    it('expect symbolDisplay=code - BRL to be BRL', () => {
      component.symbolDisplay = 'code';
      component.currencyCode = 'BRL';
      component.ngOnChanges();
      fixture.detectChanges();
      const symbol = fixture.debugElement.query(By.css('.currency-text-symbol')).nativeElement.textContent.trim();
      expect(symbol).toEqual('BRL');
    });
  });

  describe('DigitInfo -', () => {
    it('expect 1.1-2 to display value 0.0', () => {
      component.digitInfo = '1.1-2';
      component.ngOnChanges();
      fixture.detectChanges();
      const value = fixture.debugElement.query(By.css('.currency-text-value')).nativeElement.textContent.trim();
      expect(value).toEqual('0.0');
    });
    it('expect 3.0-0 to display value 000', () => {
      component.digitInfo = '3.0-0';
      component.ngOnChanges();
      fixture.detectChanges();
      const value = fixture.debugElement.query(By.css('.currency-text-value')).nativeElement.textContent.trim();
      expect(value).toEqual('000');
    });
  });
  describe('HideNegative -', () => {
    it('expect negative number to be displayed', () => {
      component.hideNegative = false;
      component.value = -5;
      component.ngOnChanges();
      fixture.detectChanges();
      const value = fixture.debugElement.query(By.css('.currency-text-symbol')).nativeElement.textContent.trim();
      expect(value.includes('-')).toBeTruthy();
    });
    it('expect negative number to be hided', () => {
      component.hideNegative = true;
      component.value = -5;
      component.ngOnChanges();
      fixture.detectChanges();
      const value = fixture.debugElement.query(By.css('.currency-text-symbol')).nativeElement.textContent.trim();
      expect(value.includes('-')).toBeFalsy();
    });
  });
});
