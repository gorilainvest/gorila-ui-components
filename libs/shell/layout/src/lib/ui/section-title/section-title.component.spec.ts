import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LayoutShellModule } from "../../layout-shell.module";
import { SectionTitleComponent } from "./section-title.component";

describe("SectionTitleComponent", () => {
  let component: SectionTitleComponent;
  let fixture: ComponentFixture<SectionTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LayoutShellModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

