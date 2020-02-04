import { Component, forwardRef, OnDestroy, Output, OnChanges } from '@angular/core';
import { FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { EventEmitter } from 'events';
import { Subject } from 'rxjs';

@Component({
  selector: 'gdk-json-input',
  templateUrl: './gdk-json-input.component.html',
  styleUrls: ['./gdk-json-input.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => GdkJsonInputComponent), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => GdkJsonInputComponent), multi: true },
    { provide: MatFormFieldControl, useExisting: GdkJsonInputComponent }
  ]
})
export class GdkJsonInputComponent extends MatFormFieldControl<any> implements ControlValueAccessor, OnDestroy {

  /**
   * It returns the jsonString of json data
   * <gdk-json-input (valueChanged)="data=$event"></gdk-json-input>
   */
  @Output() valueChanged = new EventEmitter();
  public jsonString: string;
  public stateChanges = new Subject<void>();
  private parseError: boolean;
  private data: any;

  public writeValue(obj: any) {
    if (obj) {
      this.data = obj;
      this.jsonString = JSON.stringify(this.data, undefined, 4);
      this.valueChanged.emit(this.jsonString);
      this.stateChanges.next();
    }
  }

  public registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  public validate(c: FormControl) {
    return !this.parseError
      ? null
      : {
          jsonParseError: {
            valid: false
          }
        };
  }

  public registerOnTouched() {}

  public onChange(event) {
    const newValue = event.target.value;
    try {
      if (this.jsonString === newValue) {
        return;
      }
      this.jsonString = newValue;
      const data = JSON.parse(newValue);
      this.data = data;
      this.parseError = false;
      this.propagateChange(this.data);
    } catch (ex) {
      this.parseError = true;
    }
  }

  public propagateChange = (_: any) => {};

  public setDescribedByIds = (ids: string[]): void => {};
  public onContainerClick = (event: MouseEvent): void => {};

  public ngOnDestroy() {
    this.stateChanges.complete();
  }
}
