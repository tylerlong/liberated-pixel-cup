/* eslint-env jest */
import LPC from '../src/index';

jest.setTimeout(64000);

describe('path', () => {
  test('default', async () => {
    const lpc = new LPC(process.env.SPRITES_FOLDER!);

    expect(lpc.body().male().dark().path()).toEqual(['body', 'male', 'dark']);

    expect(lpc.hair().male().long().blue().path()).toEqual([
      'hair',
      'male',
      'long',
      'blue',
    ]);
  });
});
