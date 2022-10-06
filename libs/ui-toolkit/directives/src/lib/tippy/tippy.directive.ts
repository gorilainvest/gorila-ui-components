import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

import Popper from 'popper.js';
import { merge, path } from 'ramda';
import { timer } from 'rxjs';
import { untilDestroyed } from 'ngx-take-until-destroy';

import tippy, {
  Instance as TippyInstance
} from 'tippy.js';


import { HTMLTippyProps, tippyOptionsDefault } from './tippy.model';

/**
 * @description
 *
 * Lets a component or DOM element to have a tippy tooltip on hover.
 *
 */
@Directive({ selector: '[gorTippy]' })
export class TippyDirective implements OnInit, OnChanges, OnDestroy {
  /**
   * The descriptor of a tippy instance.
   */
  @Input() public tippyOptions: HTMLTippyProps = {};

  private tippy: TippyInstance = null;
  private popper: Popper = null;
  private htmlItem = null;

  constructor(private el: ElementRef) {}

  /**
   * Load a tippy instance on init lifecicle.
   */
  public ngOnInit() {
    this.loadTippy();
  }

  /**
   * Load new / update tippy instance when `tippyOptions` change.
   */
  public ngOnChanges(changes: SimpleChanges) {
    if (changes.tippyOptions) {
      this.loadTippy();
    }
  }

  public ngOnDestroy() {
    if (this.tippy) {
      this.tippy.destroy();
    }
  }

  private loadTippy() {

    if (
      !path(['content'], this.tippyOptions) &&
      !path(['html'], this.tippyOptions)
    ) {
      return;
    }


    timer(500).pipe(untilDestroyed(this)).subscribe(() => {
      try {
        const el = this.el.nativeElement;
        if (this.tippy) {
          this.tippy.destroy();
        }
        this.tippy = tippy.one(
          el,
          this.getOptions(el, this.tippyOptions)
        );
        this.popper = this.tippy.popperInstance;
      } catch (e) {
        console.warn(e);
      }

    });
  }

  private getOptions(el: HTMLElement, options: HTMLTippyProps): HTMLTippyProps {
    options = merge(tippyOptionsDefault, options || {});
    let item = null;
    if (options.html) {
      item = el.querySelector(options.html);
      if (!item && !!this.htmlItem) {
        item = this.htmlItem;
      }
      delete options.html;
    }
    if (!!item) {
      item.style.display = 'block';
      item.style.visibility = '';
      this.htmlItem = item;
    }

    options.content =
      item || options.content || 'please set content or html option';

    return options;
  }
}
