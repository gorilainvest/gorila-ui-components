import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTooltipModule } from '@angular/material/tooltip';

import { TooltipComponent } from './tooltip.component';
import { By } from '@angular/platform-browser';

fdescribe('TooltipComponent', () => {
  let component: TooltipComponent;
  let fixture: ComponentFixture<TooltipComponent>;

  beforeEach(async((done) => {
    TestBed.configureTestingModule({
      imports: [MatTooltipModule],
      declarations: [ TooltipComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the information icon by default', () => {
    const icon = fixture.debugElement.query(By.css('img')).nativeElement as HTMLImageElement;
    expect(icon.src).toContain('icon_Information');
  });

  it('should not display the information icon when showIcon is false', () => {
    component.showIcon = false;
    fixture.detectChanges();
    const icon = fixture.debugElement.query(By.css('img'));
    expect(icon).toBeFalsy();
  });
});
