import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { keys } from 'ramda';

@Component({
  selector: 'gdk-import',
  templateUrl: './gdk-import.component.html',
  styleUrls: ['./gdk-import.component.scss']
})
export class GdkImportComponent {
  public moduleNameStr = '';
  public moduleTitle = '';
  @Input() public set moduleName(moduleName) {
    this.moduleNameStr = moduleName;
    this.moduleTitle = moduleName.split('-').map((name: string) => name.charAt(0).toUpperCase() + name.slice(1)).join('');
  }

  @Input() public prefix = '';

  public keys: string[] = [];
  public values: {[s: string]: any} = {};
  @Input() public set form(form: FormGroup) {
    this.keys = keys(form.controls);
    this.values = form.value;
    form.valueChanges.subscribe(data => console.log('@@##', data));
  }
}
