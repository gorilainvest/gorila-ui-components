import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LayoutShellModule } from "../../layout-shell.module";
import { EnhancedTitleComponent } from "./enhanced-title.component";

describe("EnhancedTitleComponent", () => {
  let component: EnhancedTitleComponent;
  let fixture: ComponentFixture<EnhancedTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LayoutShellModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnhancedTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

