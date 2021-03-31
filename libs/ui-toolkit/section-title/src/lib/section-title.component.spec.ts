import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SectionTitleComponent } from './section-title.component';

describe('SectionTitleComponent', () => {
  let component: SectionTitleComponent;
  let fixture: ComponentFixture<SectionTitleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SectionTitleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
