import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ICON_BASE_SRC } from '@gorilainvest/ui-toolkit/icon';

import { LayoutShellModule } from '../../layout-shell.module';
import { SortHeaderComponent } from './sort-header.component';

describe('SortHeaderComponent', () => {
  let component: SortHeaderComponent;
  let fixture: ComponentFixture<SortHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LayoutShellModule, NoopAnimationsModule],
      providers: [
        { provide: ICON_BASE_SRC, useValue: 'https://s3.amazonaws.com/gorila-images/app/' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
