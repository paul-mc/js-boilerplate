import { main } from './index';

describe('The `main` function', () => {
  it('Returns the input string', () => {
    expect(main('aaa')).toBe('aaa');
  });
});
