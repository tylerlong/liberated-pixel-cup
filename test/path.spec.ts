/* eslint-env jest */
import LPC from '../src/index';

jest.setTimeout(64000);

describe('path', () => {
  test('default', async () => {
    expect(LPC.body().male().dark().path()).toEqual(['body', 'male', 'dark']);

    expect(LPC.hair().male().long().blue().path()).toEqual([
      'hair',
      'male',
      'long',
      'blue',
    ]);
  });
});
