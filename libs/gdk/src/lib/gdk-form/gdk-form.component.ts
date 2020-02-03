import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'gdk-form',
  templateUrl: './gdk-form.component.html',
  styleUrls: ['./gdk-form.component.scss']
})
export class GdkFormComponent {
  public form: FormGroup;
  public model_: any[] = [];
  public displayModel: any[] = [];
  @Input() public set model(model: any[]) {
    this.model_ = model;
    this.form = this.initForm(model);
    this.setDisplayModel(this.form.value);
    this.form.valueChanges.subscribe(data => {
      this.setDisplayModel(data);
    });
    this.getForm.emit(this.form);
  }

  @Output() getForm = new EventEmitter();

  private setDisplayModel(data) {
    const out = [];
    this.model_.forEach(item => {
      if (!item.display || item.display(data)) {
        out.push(item);
      }
    });
    this.displayModel = out;
  }

  private initForm(formData: any[]) {
    const form = {};
    formData.forEach(element => {
      form[element.controlName] = new FormControl(element.value, element.validadors || []);
    });
    return new FormGroup(form);
  }
}
