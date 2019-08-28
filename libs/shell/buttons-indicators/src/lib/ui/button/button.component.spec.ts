import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ButtonsIndicatorsShellModule } from "../../buttons-indicators-shell.module";
import { ButtonComponent } from "./button.component";

describe("ButtonComponent", () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ButtonsIndicatorsShellModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

