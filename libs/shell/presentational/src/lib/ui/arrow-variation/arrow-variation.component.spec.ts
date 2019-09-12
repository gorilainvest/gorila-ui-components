import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

import { PresentationalShellModule } from "../../presentational-shell.module";
import { ArrowVariationComponent } from "./arrow-variation.component";

describe("ArrowVariationComponent", () => {
  let component: ArrowVariationComponent;
  let fixture: ComponentFixture<ArrowVariationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PresentationalShellModule, NoopAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowVariationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

