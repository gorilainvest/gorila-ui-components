import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import Popper from 'popper.js';
import { merge, path } from 'ramda';
import { timer } from 'rxjs';
import tippy, { Instance as TippyInstance, Props as TippyProps } from 'tippy.js';

import { tippyOptionsDefault } from './tippy.model';

@Directive({
    selector: '[gorTippy]'
})
export class TippyDirective implements OnInit, OnChanges {

  @Input() public tippyOptions: TippyProps = {};

  private tippy: TippyInstance = null;
  private popper: Popper = null;
  private htmlItem = null;

  constructor(private el: ElementRef) { }

  public ngOnInit() {
    this.loadTippy();
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes['tippyOptions']) {
      this.loadTippy();
    }
  }

  private loadTippy() {
    if (!path(['content'], this.tippyOptions) && !path(['html'], this.tippyOptions)) { return; }

    timer(500).subscribe(() => {
      try {
        const el = this.el.nativeElement;
        if (this.tippy) {
          this.tippy.destroy();
        }
        this.tippy = tippy.one(el, this.getOptions(el, this.tippyOptions));
        this.popper = this.tippy.popperInstance;
      } catch (e) { console.warn(e); }
    });
  }

  private getOptions(el, options): TippyProps {
    options = merge(tippyOptionsDefault, options || {});
    let item = null;
    if (options['html']) {
      item = el.querySelector(options['html']);
      if (!item && !!this.htmlItem) {
        item = this.htmlItem;
      }
      delete options['html'];
    }
    if (!!item) {
      item.style.display = 'block';
      item.style.visibility = '';
      this.htmlItem = item;
    }
    options['content'] = item || options['content'] || 'please set content or html option';
    return options;
  }
}
