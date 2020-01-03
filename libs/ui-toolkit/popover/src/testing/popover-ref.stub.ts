import { TemplateRef, Type, EmbeddedViewRef, ElementRef, asNativeElements } from '@angular/core';

class TemplateStub extends TemplateRef<any> {
  public elementRef: ElementRef = new ElementRef(null);
  viewContainerParent: null;
  public createEmbeddedView = (context: any): EmbeddedViewRef<any> => ({
    context: '',
    rootNodes: [],
    destroy: () => false,
    destroyed: false,
    onDestroy: (callback: Function) => { },
    markForCheck: () => {},
    detach: () => {},
    detectChanges: () => {},
    checkNoChanges: () => {},
    reattach: () => {},
  })
}

export namespace PopoverRefStub {
  export class PopoverStringContent<T = any> {
    public content: TemplateRef<any> | Type<any> | string = '';
    public close(data?: T) { }
  }
  export class PopoverTemplateContent<T = any> {
    public content: TemplateRef<any> | Type<any> | string = new TemplateStub();
    public close(data?: T) { }
  }
}
