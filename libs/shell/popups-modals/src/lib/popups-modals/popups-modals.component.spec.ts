import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PopupsModalsComponent } from "./popups-modals.component";

describe("PopupsModalsComponent", () => {
  let component: PopupsModalsComponent;
  let fixture: ComponentFixture<PopupsModalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PopupsModalsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupsModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
