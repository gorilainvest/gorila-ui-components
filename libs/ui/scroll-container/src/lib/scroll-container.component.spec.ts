import { Component, NgZone } from '@angular/core';
import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ScrollContainerComponent } from './scroll-container.component';
import { ScrollDispatcher, CdkScrollable, ScrollingModule } from '@angular/cdk/scrolling';
import { from as _from } from 'rxjs';
import { CommonModule } from '@angular/common';

describe('ScrollContainerComponent', () => {
  let component: ScrollContainerComponent;
  let dispatcher: ScrollDispatcher;
  let scrollable: CdkScrollable;
  let fixture: ComponentFixture<ScrollContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, ScrollingModule],
      declarations: [ ScrollContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollContainerComponent);
    component = fixture.componentInstance;
    dispatcher = TestBed.get(ScrollDispatcher);
    scrollable = new CdkScrollable(fixture.elementRef, dispatcher, TestBed.get(NgZone));
    fixture.detectChanges();
  });

  it('should create with the initial size', () => {
    expect(component.scrollStyle.width).toBe(component.initialWidth);
    expect(component.scrollStyle.height).toBe(component.initialHeight);
  });

  it('should change to scrolled size after scrolling, when distance to edge becomes greater than previous scroll length', async(() => {
    dispatcher.register(scrollable);
    spyOn(scrollable, 'measureScrollOffset').and.returnValue(500);

    fixture.detectChanges();

    expect(component.scrollStyle.width).toBe(component.scrolledWidth);
    expect(component.scrollStyle.height).toBe(component.scrolledHeight);
  }));

  it('should revert to initial size after scrolling, when distance to edge becomes smaller than the return offset', async(() => {
    dispatcher.register(scrollable);
    spyOn(scrollable, 'measureScrollOffset').and.returnValue(0);

    fixture.detectChanges();

    expect(component.scrollStyle.width).toBe(component.initialWidth);
    expect(component.scrollStyle.height).toBe(component.initialHeight);
  }));
});
