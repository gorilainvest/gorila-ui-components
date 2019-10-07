import { Props as TippyProps } from 'tippy.js';


export interface HTMLTippyProps extends TippyProps {
  html?: string;
}


/**
 * Default tippy options.
 */

export const tippyOptionsDefault: HTMLTippyProps = {
  theme: "gorila-dark",
  arrow: true,
  delay: [50, 0],
  duration: [500, 200],
  performance: true,
  interactive: true,
  interactiveDebounce: 0
};
