import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ButtonsIndicatorsShellModule } from "../../buttons-indicators-shell.module";
import { CountdownButtonComponent } from "./countdown-button.component";

describe("CountdownButtonComponent", () => {
  let component: CountdownButtonComponent;
  let fixture: ComponentFixture<CountdownButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ButtonsIndicatorsShellModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

