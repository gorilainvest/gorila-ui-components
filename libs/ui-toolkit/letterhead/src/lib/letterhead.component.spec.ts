import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LetterheadComponent } from './mur-letterhead.component';
import { LetterheadFooterComponent } from './footer/footer.component';
import { LetterheadHeaderComponent } from './header/header.component';

describe('LetterheadComponent', () => {
  let component: LetterheadComponent;
  let fixture: ComponentFixture<LetterheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LetterheadComponent,
        LetterheadFooterComponent,
        LetterheadHeaderComponent,
      ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterheadComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('is should emit value when onIconClick is called', () => {
    const value = 'test';
    spyOn(component.iconClick, 'emit');
    component.onIconClick(value);
    expect(component.iconClick.emit).toHaveBeenCalledWith(value);
  });
});
