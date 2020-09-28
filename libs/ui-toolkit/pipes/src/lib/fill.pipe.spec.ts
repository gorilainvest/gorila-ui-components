import { FillPipe } from './fill.pipe';

describe('FillPipe', () => {
  let pipe: FillPipe;

  beforeEach(() => {
    pipe = new FillPipe();
  });

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return an array with length equal to the value passed to it', () => {
    const randomLength = Math.floor(Math.random() * 1000);
    const arr = pipe.transform(randomLength);
    expect(arr.length).toEqual(randomLength);
  });
});
