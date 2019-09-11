import { async, TestBed } from "@angular/core/testing";
import { GdkModule } from "./gdk.module";

describe("GdkModule", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GdkModule]
    }).compileComponents();
  }));

  it("should create", () => {
    expect(GdkModule).toBeDefined();
  });
});
