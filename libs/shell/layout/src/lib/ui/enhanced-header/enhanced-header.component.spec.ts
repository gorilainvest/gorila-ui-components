import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutShellModule } from '../../layout-shell.module';
import { EnhancedHeaderComponent } from './enhanced-header.component';

describe('EnhancedHeaderComponent', () => {
  let component: EnhancedHeaderComponent;
  let fixture: ComponentFixture<EnhancedHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LayoutShellModule, NoopAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnhancedHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

