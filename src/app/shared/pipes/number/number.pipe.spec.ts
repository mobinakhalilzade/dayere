import { PersianNumberPipe } from './number.pipe';

describe('NumberPipe', () => {
  it('create an instance', () => {
    const pipe = new PersianNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
