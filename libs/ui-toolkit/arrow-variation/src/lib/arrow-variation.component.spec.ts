import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from "@angular/platform-browser";

import { ArrowVariationComponent, PATH_ARROW } from './arrow-variation.component';

describe('ArrowVariationComponent', () => {
  let component: ArrowVariationComponent;
  let fixture: ComponentFixture<ArrowVariationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ArrowVariationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowVariationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('positive values', () => {
    it('arrow direction must be `up`', () => {
      component.value = 2010;
      component.updateArrow();
      fixture.detectChanges();
      
      const arrow = fixture.debugElement.query(By.css('path')).nativeElement;
      const color = arrow.getAttribute('fill');
      const path = arrow.getAttribute('d');
      expect(color).toBe('#75B629');
      expect(path).toBe(PATH_ARROW.UP);
    });
  });

  describe('negative values', () => {
    it('arrow direction must be `down`', () => {
      component.value = -2020;
      component.updateArrow();
      fixture.detectChanges();

      const arrow = fixture.debugElement.query(By.css('path')).nativeElement;
      const color = arrow.getAttribute('fill');
      const path = arrow.getAttribute('d');
      expect(color).toBe('#EF2E2E');
      expect(path).toBe(PATH_ARROW.DOWN);
    });
  });

  describe('zero values', () => {
    it('arrow must not be displayed', () => {
      component.updateArrow();
      fixture.detectChanges();

      const emptyDiv = fixture.debugElement.query(By.css('#emptyDiv'));
      expect(emptyDiv).toBeTruthy();
    });
  });
});

