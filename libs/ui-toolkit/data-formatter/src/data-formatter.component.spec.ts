import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFormatterComponent } from './data-formatter.component';
import { DataFormatterModule } from './data-formatter.module';

describe('DataFormatterComponent', () => {
  let component: DataFormatterComponent;
  let fixture: ComponentFixture<DataFormatterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DataFormatterModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
