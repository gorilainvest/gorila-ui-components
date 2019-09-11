import { async, TestBed } from "@angular/core/testing";
import { ButtonsIndicatorsShellModule } from "./buttons-indicators-shell.module";

describe("ButtonsIndicatorsShellModule", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ButtonsIndicatorsShellModule]
    }).compileComponents();
  }));

  it("should create", () => {
    expect(ButtonsIndicatorsShellModule).toBeDefined();
  });
});
