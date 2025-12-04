import { TruncatePipe } from './truncate-pipe';

describe('TruncatePipe', () => {
  const pipe = new TruncatePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should truncate text if it is longer than the limit', () => {
    const text = 'Hello World From Angular';
    const result = pipe.transform(text, 5); 
    expect(result).toBe('Hello...');
  });

  it('should NOT truncate text if it is shorter than the limit', () => {
    const text = 'Hi';
    const result = pipe.transform(text, 10);
    expect(result).toBe('Hi');
  });
});