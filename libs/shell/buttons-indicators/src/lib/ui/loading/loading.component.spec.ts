import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

import { ButtonsIndicatorsShellModule } from "../../buttons-indicators-shell.module";
import { LoadingComponent } from "./loading.component";

describe("LoadingComponent", () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ButtonsIndicatorsShellModule, NoopAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

