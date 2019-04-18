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
});

