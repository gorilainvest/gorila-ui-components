import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";




import { PopupConfirmComponent as ModalComponent } from '@gorilainvest/ui-toolkit/popup-confirm';



@Component({
  selector: "gorilainvest-popup-confirm",
  templateUrl: "./popup-confirm.component.html",
  styleUrls: ["./popup-confirm.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class PopupConfirmComponent implements OnInit {
  actionOneFormControl = new FormControl("Sure...");
  actionTwoFormControl = new FormControl("Of course not!");
  titleFormControl = new FormControl("On Melancholy Hill");
  textFormControl = new FormControl(`So call in the submarines
    'round the world will go
    does anybody know her?`);

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  public open() {
    const action = (controlValue: string) => ({
      value: controlValue,
      text: controlValue
    });
    this.dialog.open(ModalComponent, {
      height: "220px",
      width: "521px",
      disableClose: true,
      data: {
        title: this.titleFormControl.value,
        content: [
          {
            text: this.textFormControl.value,
            actions: [
              action(this.actionOneFormControl.value),
              action(this.actionTwoFormControl.value)
            ]
          }
        ],
        item: {
          height: "220px",
          width: "521px",
          disableClose: true,
          data: {
            title: this.titleFormControl.value,
            content: [
              {
                text: this.textFormControl.value,
                actions: [
                  action(this.actionOneFormControl.value),
                  action(this.actionTwoFormControl.value)
                ]
              }
            ]
          }
        }
      }
    });
  }
}


