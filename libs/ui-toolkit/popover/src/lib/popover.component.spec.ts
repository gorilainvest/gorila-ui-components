import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverRefStub } from '../testing/popover-ref.stub';
import { PopoverRef } from './popover-ref';
import { PopoverComponent } from './popover.component';

describe('PopoverComponent - ', () => {
  let component: PopoverComponent;
  let fixture: ComponentFixture<PopoverComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PopoverComponent],
      providers: [
        { provide: PopoverRef, useClass: PopoverRefStub.PopoverStringContent },
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('testing popover', () => {
    it('testing popover string', () => {
      component.content = 'testing the string';
      component.ngOnInit();
      fixture.detectChanges();
      expect(component.renderMethod).toEqual('text');
    });
  });
});
