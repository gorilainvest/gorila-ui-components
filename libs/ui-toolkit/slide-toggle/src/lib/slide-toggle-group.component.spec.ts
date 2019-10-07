import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideToggleComponent } from './slide-toggle.component';
import { SlideToggleGroupComponent } from './slide-toggle-group.component';

describe('SlideToggleGroupComponent', () => {
  let component: SlideToggleGroupComponent;
  let fixture: ComponentFixture<SlideToggleGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SlideToggleGroupComponent, SlideToggleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideToggleGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('test active array', () => {
    const data = [
      { cod: '1', title: '1', checked: false, color: '#F00000' },
      { cod: '2', title: '2', checked: false, color: '#0F0000' },
      { cod: '3', title: '3', checked: false, color: '#00F000' },
      { cod: '4', title: '4', checked: false, color: '#000F00' },
      { cod: '5', title: '5', checked: false, color: '#0000F0' },
      { cod: '6', title: '6', checked: false, color: '#00000F' },
      { cod: '7', title: '7', checked: false, color: '#FF0000' },
      { cod: '8', title: '8', checked: false, color: '#00FF00' },
      { cod: '9', title: '9', checked: false, color: '#0000FF' }
    ];

    beforeEach(() => {
      component.data = data;
    });
    it('seting 1 and 9 false - should be [] again', () => {
      spyOn(component.selecteds, 'emit');
      component.toggleChange('1', false);
      component.toggleChange('9', false);
      fixture.detectChanges();
      expect(component.selecteds.emit).toHaveBeenCalledWith([]);
    });

    it('seting 1 and 9 true - should be [1,9]', () => {
      spyOn(component.selecteds, 'emit');
      component.toggleChange('1', true);
      component.toggleChange('9', true);
      fixture.detectChanges();
      expect(component.selecteds.emit).toHaveBeenCalledWith(['1', '9']);
    });

    it('setting 1,3,9 true - should be [1,3,9]', () => {
      spyOn(component.selecteds, 'emit');
      component.toggleChange('1', true);
      component.toggleChange('3', true);
      component.toggleChange('9', true);
      fixture.detectChanges();
      expect(component.selecteds.emit).toHaveBeenCalledWith(['1', '3', '9']);
    });

    it('seting 3,4 true then 3 false (9 was selected in other test) - should be [1,4,9]', () => {
      spyOn(component.selecteds, 'emit');
      component.toggleChange('3', true);
      component.toggleChange('4', true);
      component.toggleChange('3', false);
      fixture.detectChanges();
      expect(component.selecteds.emit).toHaveBeenCalledWith(['1', '4', '9']);
    });
  });
});
