import Popper from 'popper.js';
import { keys, merge, path } from 'ramda';
import { timer } from 'rxjs';

import tippy, {
  Instance as TippyInstance,
  Targets
} from 'tippy.js';


import { HTMLTippyProps, tippyOptionsDefault } from './tippy.model';

/**
 * @description
 *
 * Helper class to safely manage tippy instances.
 */
export class TippyHelper {
  private htmlItem: {[s: string]: any} = {};
  private popper: {[s: string]: Popper} = {};
  private tippy: {[s: string]: TippyInstance} = {};

  /**
   * Reset helper state and invokes `stopTippy` for all active tippy instance.
   */
  public destroy() {
    this.htmlItem = {};
    keys(this.tippy).forEach(id => this.stopTippy(id));
    this.tippy = {};
    this.popper = {};
  }

  /**
   * Act as a proxy to tippy library creating a new or updating a existent one.
   */
  public startTippy(id: string, tippyOptions: HTMLTippyProps, hoverElement: Targets, tippyElement?: Targets) {
    if (!path(['content'], tippyOptions) && !path(['html'], tippyOptions)) {

      console.warn(
        'tippy not started because you didn`t pass content or html parameters'
      );

      return;
    }
    timer(500).subscribe(() => {
      try {
        if (!!this.tippy[id]) {
          this.updateItem(id);
          return this.tippy[id].enable();
        }
        if (!tippyElement) {
          tippyElement = hoverElement;
        }
        this.stopTippy(id);
        const options = this.getOptions(id, tippyElement, tippyOptions);
        this.tippy[id] = tippy.one(hoverElement, options);
        if (!this.tippy[id]) {
          console.warn(`invalid tippy instance with id ${id}`);
          return;
        }
        this.tippy[id].enable();
        this.popper[id] = this.tippy[id].popperInstance;
      } catch (e) {
        console.warn(e);
      }

    });
  }

  /**
   * Effectively and safely destroy tippy instances.
   * @returns boolean Indicating if a tippy instance was destroyed. Otherwise, if have
   * errors or doesn't exist return false.
   */
  public stopTippy(id: string): boolean {
    try {
      if (!!this.tippy[id]) {
        this.tippy[id].destroy();
        return true;
      }
    } catch (e) {
      console.warn(e);
    }
    return false;
  }

  private getOptions(id: string, el, opts: HTMLTippyProps): HTMLTippyProps {
    const options = merge(tippyOptionsDefault, opts || {});
    let item = null;
    const html = options.html;
    if (!!options.html) {
      item = el.querySelector(options.html);
      if (!item && !!this.htmlItem[id]) {
        item = this.htmlItem[id];
      }
      delete options.html;
    }
    if (!!item) {
      this.updateItem(id, item);
    } else {

      console.warn('tippy target not found or invalid content', {
        htmlOption: html
      });

    }

    options.content =
      item || options.content || 'please set content or html option';

    return options;
  }

  private updateItem(id: string, item?: HTMLElement) {
    if (!!this.htmlItem[id]) {
      this.htmlItem[id].style.display = 'block';
      this.htmlItem[id].style.visibility = '';
      return;
    }
    if (!!item) {
      item.style.display = 'block';
      item.style.visibility = '';
      this.htmlItem[id] = item;
    }
  }
}
