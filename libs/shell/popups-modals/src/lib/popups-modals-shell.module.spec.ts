import { async, TestBed } from "@angular/core/testing";
import { PopupsModalsShellModule } from "./popups-modals-shell.module";

describe("PopupsModalsShellModule", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PopupsModalsShellModule]
    }).compileComponents();
  }));

  it("should create", () => {
    expect(PopupsModalsShellModule).toBeDefined();
  });
});
