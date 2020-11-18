import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SlideToggleComponent } from './slide-toggle.component';

describe('SlideToggleComponent', () => {
  let component: SlideToggleComponent;
  let fixture: ComponentFixture<SlideToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SlideToggleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('test checked', () => {
    it('should be true', () => {
      spyOn(component.toggleChange, 'emit');
      component.checked = false;
      component.changeChecked();
      fixture.detectChanges();
      expect(component.toggleChange.emit).toHaveBeenCalledWith(true);
    });

    it('should be false', () => {
      spyOn(component.toggleChange, 'emit');
      component.checked = true;
      component.changeChecked();
      fixture.detectChanges();
      expect(component.toggleChange.emit).toHaveBeenCalledWith(false);
    });
  });

  describe('test colors', () => {
    it('expect color to be empty', () => {
      component.color = '#ff0000';
      component.checked = false;
      fixture.detectChanges();
      const buttonDebugElement = fixture.debugElement.query(
        By.css('.slider.round')
      );
      expect(buttonDebugElement.styles['backgroundColor']).toEqual('');
    });

    it('expect color to be #ff0000 in rgb()', () => {
      component.checked = true;
      component.color = '#ff0000';
      fixture.detectChanges();
      const buttonDebugElement = fixture.debugElement.query(
        By.css('.slider.round')
      );
      expect(buttonDebugElement.styles['backgroundColor']).toEqual('rgb(255, 0, 0)');
    });
  });
});
