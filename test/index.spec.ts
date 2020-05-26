/* eslint-env jest */
import LPC from '../src/index';

jest.setTimeout(64000);

describe('default', () => {
  test('default', async () => {
    console.log(LPC.hair());
  });
});
