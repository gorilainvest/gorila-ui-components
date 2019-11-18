import { ScrollingModule } from '@angular/cdk/scrolling';
import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EnhancedTitleModule } from '@gorilainvest/ui-toolkit/enhanced-title';

import { PageHeaderComponent } from './page-header.component';

@Component({
  selector: 'gor-test-container',
  template: `
    <div id="div-container" cdkScrollable style="width: 300px; height: 200px; overflow: scroll">
      <gor-page-header>
        <gro-enhanced-title [title]="'My'" [highlight]="'Test'"></gro-enhanced-title>
        <ng-container gorPageHeaderBottom><div>Header Filters</div></ng-container>
      </gor-page-header>
      <div style="width: 300px; height: 500px;"></div>
    </div>
  `
})
class TestHostComponent {}

describe('PageHeaderComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [EnhancedTitleModule, ScrollingModule],
      declarations: [PageHeaderComponent, TestHostComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  }));

  it('should create', () => {
    const headerElement = fixture.debugElement.query(By.css('gor-page-header')).nativeElement;
    expect(headerElement).toBeTruthy();
  });

  it('should display the title in the top row', () => {
    const title = fixture.debugElement.query(By.css('.grid-row-top')).nativeElement.textContent.trim();
    expect(title).toEqual('My Test');
  });

  it('should display the filters in the bottom row', () => {
    const filters = fixture.debugElement.query(By.css('.grid-row-bottom')).nativeElement.textContent.trim();
    expect(filters).toEqual('Header Filters');
  });

  it("should acquire the class 'scrolled' after scrolling, when distance to edge becomes more than the departure offset", async(() => {
    fixture.debugElement.query(By.css('#div-container')).nativeElement.scrollTo(0, 130);
    setTimeout(() => {
      fixture.detectChanges();
      const headerScrolled = fixture.debugElement.query(By.css('gor-page-header.scrolled')).nativeElement;
      expect(headerScrolled).toBeTruthy();
    }, 250);
  }));

  it("should not have class 'scrolled' after scrolling, when distance to edge becomes smaller than the return offset", async(() => {
    fixture.debugElement.query(By.css('#div-container')).nativeElement.scrollTo(0, 130);
    setTimeout(() => {
      fixture.detectChanges();
      fixture.debugElement.query(By.css('#div-container')).nativeElement.scrollTo(0, 0);
      setTimeout(() => {
        fixture.detectChanges();
        const headerScrolled = fixture.debugElement.query(By.css('gor-page-header.scrolled'));
        expect(headerScrolled).toBeFalsy();
      }, 250);
    }, 250);
  }));
});

