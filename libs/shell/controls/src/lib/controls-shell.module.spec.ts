import { async, TestBed } from "@angular/core/testing";
import { ControlsShellModule } from "./controls-shell.module";

describe("ControlsShellModule", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ControlsShellModule]
    }).compileComponents();
  }));

  it("should create", () => {
    expect(ControlsShellModule).toBeDefined();
  });
});
