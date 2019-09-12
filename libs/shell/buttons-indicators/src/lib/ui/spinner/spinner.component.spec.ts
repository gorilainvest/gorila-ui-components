import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

import { ButtonsIndicatorsShellModule } from "../../buttons-indicators-shell.module";
import { SpinnerComponent } from "./spinner.component";

describe("SpinnerComponent", () => {
  let component: SpinnerComponent;
  let fixture: ComponentFixture<SpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ButtonsIndicatorsShellModule, NoopAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

