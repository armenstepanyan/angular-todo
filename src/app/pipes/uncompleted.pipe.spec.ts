import { UncompletedPipe } from './uncompleted.pipe';

describe('UncompletedPipe', () => {
  it('create an instance', () => {
    const pipe = new UncompletedPipe();
    expect(pipe).toBeTruthy();
  });
});
