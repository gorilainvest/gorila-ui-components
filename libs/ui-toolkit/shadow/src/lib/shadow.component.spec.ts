import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { getShadowTypes, ShadowType } from './shadow.model';

import { ShadowModule } from './shadow.module';

@Component({
  selector: 'gor-host',
  template: `
    <gor-shadow
      [displayShadow]="displayShadow"
      [shadowType]="shadowType"
    >
      <span class="shadow-content">{{ content }}</span>
    </gor-shadow>
  `
})
class HostComponent {
  public displayShadow = true;
  public shadowType = '';
  public content = 'COMPONENT CONTENT';
}

describe('ShadowComponent', () => {
  let host: HostComponent;
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShadowModule],
      declarations: [HostComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const shadowElement = fixture.debugElement.query(By.css('gor-shadow')).nativeElement;
    expect(shadowElement).toBeTruthy();
  });

  it('should display the content if displayShadow is false', () => {
    const content = fixture.debugElement.query(By.css('.shadow-content')).nativeElement.textContent.trim();
    expect(content).toEqual(host.content);
  });

  it('should not display the content if displayShadow is true', () => {
    host.displayShadow = false;
    fixture.detectChanges();
    const content = fixture.debugElement.query(By.css('.shadow-content')).nativeElement.textContent.trim();
    expect(content).toBeFalsy();
  });

  it('should display the shadow according to shadowType', () => {
    const types = getShadowTypes();
    types.forEach(type => {
      host.shadowType = type;
      fixture.detectChanges();
      const shadow = fixture.debugElement.query(By.css(`.${type}`));
      expect(shadow).toBeTruthy();
    });
  });
})
