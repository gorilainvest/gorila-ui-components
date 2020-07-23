import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DirectivesModule } from '@gorilainvest/ui-toolkit/directives';
import { ICON_BASE_SRC, IconModule } from '@gorilainvest/ui-toolkit/icon';
import { LetterheadComponent } from './letterhead.component';
import { LetterheadFooterComponent } from './footer/footer.component';
import { LetterheadHeaderComponent } from './header/header.component';

describe('LetterheadComponent', () => {
  let component: LetterheadComponent;
  let fixture: ComponentFixture<LetterheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, IconModule, DirectivesModule],
      declarations: [
        LetterheadComponent,
        LetterheadFooterComponent,
        LetterheadHeaderComponent,
      ],
      providers: [{ provide: ICON_BASE_SRC, useValue: 'https://s3.amazonaws.com/gorila-images/app/' }]
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
