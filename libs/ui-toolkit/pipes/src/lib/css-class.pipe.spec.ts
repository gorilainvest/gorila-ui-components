import { CssClassPipe } from './css-class.pipe';

describe('CssClassPipe', () => {
  let pipe: CssClassPipe;

  beforeEach(() => {
    pipe = new CssClassPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return an empty string for null input', () => {
    expect(pipe.transform(null)).toEqual('');
  });

  it('should apply toLowerCase and replace all spaces with underscores', () => {
    expect(pipe.transform('TEST INPUT FOR CSS PIPE')).toEqual('test_input_for_css_pipe');
  });
});
