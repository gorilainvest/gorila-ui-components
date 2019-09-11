import { async, TestBed } from "@angular/core/testing";
import { LayoutShellModule } from "./layout-shell.module";

describe("LayoutShellModule", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LayoutShellModule]
    }).compileComponents();
  }));

  it("should create", () => {
    expect(LayoutShellModule).toBeDefined();
  });
});
