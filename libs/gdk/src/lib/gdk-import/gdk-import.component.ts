import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { keys } from 'ramda';

@Component({
  selector: 'gdk-import',
  templateUrl: './gdk-import.component.html',
  styleUrls: ['./gdk-import.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GdkImportComponent {
  public moduleNameStr = '';
  public moduleTitle = '';

  /**
   * The name of module separeted by hyphen without module prefix
   * E.G. CardContainerModule send card-container as input but not gorilainvest-card-container.
   * the prefix you must sent in the prefix input
   */
  @Input() public set moduleName(moduleName) {
    this.moduleNameStr = moduleName;
    this.moduleTitle = moduleName.split('-').map((name: string) => name.charAt(0).toUpperCase() + name.slice(1)).join('');
  }


  /**
   * The prefix input. Can be gorilainvest, gro, gor, etc
   */
  @Input() public prefix = '';

  public keys: string[] = [];
  public values: {[s: string]: any} = {};


  /**
   * A form group where the keys are the component input names and
   * the values are the component input values.
   * (see currency-display into shell/layout/src/lib/ui folder)
   */
  @Input() public set form(form: FormGroup) {
    this.keys = keys(form.controls);
    this.values = form.value;
    form.valueChanges.subscribe(data => this.values = data);
  }
}
