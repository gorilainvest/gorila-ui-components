import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconComponent } from './icon.component';
import { ICON_BASE_SRC } from './token';

describe('IconComponent', () => {
  let component: IconComponent;
  let fixture: ComponentFixture<IconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IconComponent],
      providers: [
        { provide: ICON_BASE_SRC, useValue: 'https://s3.amazonaws.com/gorila-images/app/' }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should build the icon path using pathPrefix, icon modifier, color modifier and image format.', () => {
    const path = '/assets/img/email_black.png';
    component.color = 'black';
    component.icon = 'email';
    component.imgFormat = 'png';
    fixture.detectChanges();
    expect(component.path).toEqual(path);
  });
});


