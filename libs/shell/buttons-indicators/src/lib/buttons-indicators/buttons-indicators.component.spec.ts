import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ButtonsIndicatorsComponent } from "./buttons-indicators.component";

describe("ButtonsIndicatorsComponent", () => {
  let component: ButtonsIndicatorsComponent;
  let fixture: ComponentFixture<ButtonsIndicatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonsIndicatorsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsIndicatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
