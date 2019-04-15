import { fakeAsync, tick as _tick } from '@angular/core/testing';
import { asyncScheduler } from 'rxjs';
import tippy from 'tippy.js';
import { TippyHelper } from './tippy.helper';

describe('TippyHelper', () => {
  let helper: TippyHelper;

  beforeEach(() =>{
    helper = new TippyHelper();
  });

  describe('destroy cases', () => {
    it ('should only reset state when no tippies are active', () => {
      helper.destroy();

      expect(helper['htmlItem']).toEqual({});
      expect(helper['popper']).toEqual({});
      expect(helper['tippy']).toEqual({});
    });

    it ('should reset state and stop all active tippies', () => {
      const tippyMap = {
        tippy0: null,
        tippy1: null,
        tippy2: null,
        tippy3: null,
        tippy4: null
      };
      helper['tippy'] = { ...tippyMap };
      spyOn(helper, 'stopTippy');

      helper.destroy();

      Object.keys(tippyMap).forEach(k => expect(helper.stopTippy).toHaveBeenCalledWith(k));
      expect(helper.stopTippy).toHaveBeenCalledTimes(5);
      expect(helper['htmlItem']).toEqual({});
      expect(helper['popper']).toEqual({});
      expect(helper['tippy']).toEqual({});
    });
  });

  describe('start cases', () => {
    let tick: (ms: number) => void;

    beforeEach(() => {
      let fakeNow = 0;
      tick = ms => {
        fakeNow += ms;
        _tick(ms);
      };
      asyncScheduler.now = () => fakeNow;
    });

    afterEach(() => {
      delete asyncScheduler.now;
    });

    it('should not start if no content is provided', fakeAsync(() => {
      const key = 'no content tippy';

      helper.startTippy(key, {}, document.createElement('span'));
      tick(500);

      expect(helper['htmlItem'][key]).toBeUndefined('htmlItem must be undefined');
      expect(helper['popper'][key]).toBeUndefined('popper must be undefined');
      expect(helper['tippy'][key]).toBeUndefined('tippy must be undefined');
    }));

    it('should update existent tippy', fakeAsync(() => {
      const key = 'tippy exist';
      const options = { content: 'content' };
      helper['htmlItem'] = { [key]: document.createElement('span')};
      helper['tippy'] = { [key]: tippy.one(helper['htmlItem'][key]) };
      spyOn(helper['tippy'][key], 'enable');

      helper.startTippy(key, options, document.createElement('p'));
      tick(500);

      expect(helper['htmlItem'][key]).toBeDefined('htmlItem must be defined');
      expect(helper['popper'][key]).toBeUndefined('popper must be undefined');
      expect(helper['tippy'][key]).toBeDefined('tippy must be defined');
      expect(helper['tippy'][key].enable).toHaveBeenCalled();
      expect(helper['htmlItem'][key].style.display).toBe('block');
      expect(helper['htmlItem'][key].style.visibility).toBe('');
    }));

    it('should ignore invalid tippy instances', fakeAsync(() => {
      const key = 'invalid tippy';
      const options = { content: 'content' };

      helper.startTippy(key, options, null);
      tick(500);

      expect(helper['htmlItem'][key]).toBeUndefined('htmlItem must be undefined');
      expect(helper['popper'][key]).toBeUndefined('popper must be undefined');
      expect(helper['tippy'][key]).toBeUndefined('tippy must be undefined');
    }));

    it('should create popper for valid tippy instance', fakeAsync(() => {
      const key = 'valid tippy';
      const options = { content: 'content' };

      helper.startTippy(key, options, document.createElement('p'));
      tick(500);

      expect(helper['htmlItem'][key]).toBeUndefined('htmlItem must be undefined');
      expect(helper['popper'][key]).toBeDefined('popper must be defined');
      expect(helper['tippy'][key]).toBeDefined('tippy must be defined');
    }));
  });

  describe('stop cases', () => {
    it('should not call destroy method for inexistent tippy', () => {
      const tippyMap = {};
      helper['tippy'] = { ...tippyMap };

      const stopped = helper.stopTippy('not exist');

      expect(stopped).toBe(false);
    });

    it('should call destroy method for existent tippy', () => {
      const tippyMap = {
        tippy: tippy.one(document.createElement('span'))
      };
      helper['tippy'] = { ...tippyMap };

      const stopped = helper.stopTippy('tippy');

      expect(stopped).toBe(true);
    });

    it('should ignore non TippyInstance', () => {
      const tippyMap = {
        nonTippy: null
      };
      helper['tippy'] = { ...tippyMap };

      const stopped = helper.stopTippy('nonTippy');

      expect(stopped).toBe(false);
    });
  });
});
