import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { GdkModule } from "../gdk.module";
import { GdkCardComponent } from "./gdk-card.component";

describe("GdkCardComponent", () => {
  let component: GdkCardComponent;
  let fixture: ComponentFixture<GdkCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GdkModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GdkCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

