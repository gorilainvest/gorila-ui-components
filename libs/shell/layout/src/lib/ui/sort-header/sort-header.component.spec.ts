import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutShellModule } from '../../layout-shell.module';
import { SortHeaderComponent } from './sort-header.component';

describe('SortHeaderComponent', () => {
  let component: SortHeaderComponent;
  let fixture: ComponentFixture<SortHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LayoutShellModule, NoopAnimationsModule]
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
