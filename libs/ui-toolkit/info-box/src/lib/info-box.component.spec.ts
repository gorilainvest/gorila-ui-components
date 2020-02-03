import { Pipe, PipeTransform } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PATH_ARROW } from '@gorilainvest/ui-toolkit/arrow-variation';
import { CurrencyDisplayModule } from '@gorilainvest/ui-toolkit/currency-display';
import { TranslateService } from '@ngx-translate/core';

import { InfoBoxComponent } from './info-box.component';
import { InfoBoxModule } from './info-box.module';

export class TranslateServiceStub {
  public instant = str => str;
}

@Pipe({ name: 'translate' })
export class TranslatePipeStub implements PipeTransform {
  public transform(word: string): string {
    return word;
  }
  public filter(word: string) {
    return word;
  }
}

describe('InfoBoxComponent', () => {
  let component: InfoBoxComponent;
  let fixture: ComponentFixture<InfoBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TranslatePipeStub],
      imports: [CurrencyDisplayModule, InfoBoxModule],
      providers: [{ provide: TranslateService, useClass: TranslateServiceStub }]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title if info input has title', () => {
    component.infoList = [{ title: 'InfoTitle' }];
    fixture.detectChanges();
    const title = fixture.debugElement.query(By.css('.info-title')).nativeElement.textContent.trim();
    expect(title).toEqual('InfoTitle');
  });

  it('should display value if info input has value', () => {
    component.infoList = [{ value: 30 }];
    fixture.detectChanges();
    const value = fixture.debugElement
      .query(By.css('gro-currency-display'))
      .nativeElement.querySelector('.currency-text-value')
      .textContent.trim();
    expect(value).toEqual('30.00');
  });

  it('should display arrow component if arrow is true in info input', () => {
    component.infoList = [{ arrow: true, value: 30 }];
    fixture.detectChanges();
    const arrow = fixture.debugElement.query(By.css('mur-arrow-variation'));
    expect(arrow).toBeTruthy();
  });

  it('should create a positive arrow for info input with value > 0', () => {
    component.infoList = [{ arrow: true, value: 30 }];
    fixture.detectChanges();
    const arrowPath = fixture.debugElement.query(By.css('.arrow path'));
    expect(arrowPath.attributes.d).toEqual(PATH_ARROW.UP);
  });

  it('should create a negative arrow for info input with value < 0', () => {
    component.infoList = [{ arrow: true, value: -30 }];
    fixture.detectChanges();
    const arrowPath = fixture.debugElement.query(By.css('.arrow path'));
    expect(arrowPath.attributes.d).toEqual(PATH_ARROW.DOWN);
  });

  it('should display volatility and sharpe values if info input has volatility and sharpe', () => {
    component.infoList = [{ volatility: 0.4, sharpe: 1.3 }];
    fixture.detectChanges();
    let volSharpe = fixture.debugElement.query(By.css('.info-vol-sharpe')).nativeElement.textContent.trim();
    volSharpe = volSharpe.split('%');
    expect(volSharpe).toEqual(['40.00', '1.30']);
  });

  it('should display date if info input has dateValue', () => {
    component.infoList = [{ dateValue: '01/01/2019' }];
    fixture.detectChanges();
    const date = fixture.debugElement.query(By.css('.info-date')).nativeElement.textContent.trim();
    expect(date).toEqual('01/01/2019');
  });

  it('should display subtitle if info input has subtitle', () => {
    component.infoList = [{ subtitle: 'InfoSubtitle' }];
    fixture.detectChanges();
    const subtitle = fixture.debugElement.query(By.css('.info-subtitle')).nativeElement.textContent.trim();
    expect(subtitle).toEqual('InfoSubtitle');
  });
});
