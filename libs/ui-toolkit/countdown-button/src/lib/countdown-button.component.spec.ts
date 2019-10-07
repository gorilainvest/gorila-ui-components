import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick as _tick
} from '@angular/core/testing';
import { asyncScheduler } from 'rxjs';


import { ButtonComponent } from '@gorilainvest/ui-toolkit/button';

import { CountdownButtonComponent } from './countdown-button.component';

describe('CountdownButtonComponent', () => {
  let component: CountdownButtonComponent;
  let fixture: ComponentFixture<CountdownButtonComponent>;
  let tick: (ms: number) => void;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonComponent, CountdownButtonComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    let fakeNow = 0;
    tick = ms => {
      fakeNow += ms;
      _tick(ms);
    };
    asyncScheduler.now = () => fakeNow;
  });

  afterEach(() => {
    delete asyncScheduler.now;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should decrement change the button text on tick', fakeAsync(() => {
    component.waitText = 'Testing in';
    component.waitTime = 2;

    component.dispatchAction();

    component.counter$.subscribe();
    tick(1000);
    expect(component.counterText).toEqual('Testing in 1');
    tick(1000);
    expect(component.counterText).toEqual('Testing in 0');
    tick(1000);
  }));
});
