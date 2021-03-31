import { TestBed, waitForAsync } from "@angular/core/testing";
import { GdkModule } from "./gdk.module";

describe("GdkModule", () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [GdkModule]
    }).compileComponents();
  }));

  it("should create", () => {
    expect(GdkModule).toBeDefined();
  });
});
