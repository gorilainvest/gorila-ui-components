import { async, TestBed } from "@angular/core/testing";
import { PresentationalShellModule } from "./presentational-shell.module";

describe("PresentationalShellModule", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PresentationalShellModule]
    }).compileComponents();
  }));

  it("should create", () => {
    expect(PresentationalShellModule).toBeDefined();
  });
});
