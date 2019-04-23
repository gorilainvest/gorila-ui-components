import { SimpleChange } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowVariationComponent } from './arrow-variation.component';

describe('ArrowVariationComponent', () => {
  let component: ArrowVariationComponent;
  let fixture: ComponentFixture<ArrowVariationComponent>;

  beforeEach(async(() => {
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
    it('arrow type must be `positive`', () => {
      component.value = 2019;

      component.ngOnChanges({
        value: new SimpleChange(null, component.value, false)
      });

      expect(component.type).toEqual('positive');
    });

    it('arrow css class must have `positive`', () => {
      component.value = 2019;

      component.ngOnChanges({
        value: new SimpleChange(null, component.value, false)
      });

      expect(component.cssclasses).toContain('positive');
    });
  });

  describe('negative values', () => {
    it('arrow type must be `negative`', () => {
      component.value = -2019;

      component.ngOnChanges({
        value: new SimpleChange(null, component.value, false)
      });

      expect(component.type).toEqual('negative');
    });

    it('arrow css class must have `negative`', () => {
      component.value = -2019;

      component.ngOnChanges({
        value: new SimpleChange(null, component.value, false)
      });

      expect(component.cssclasses).toContain('negative');
    });
  });

  describe('zero values', () => {
    it('arrow type must be `zero`', () => {
      component.value = 0;

      component.ngOnChanges({
        value: new SimpleChange(null, component.value, false)
      });

      expect(component.type).toEqual('zero');
    });

    it('arrow css class must have `zero`', () => {
      component.value = 0;

      component.ngOnChanges({
        value: new SimpleChange(null, component.value, false)
      });

      expect(component.cssclasses).toContain('zero');
    });
  });
});

