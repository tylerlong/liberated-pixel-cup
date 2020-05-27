/* eslint-env jest */
import LPC from '../src/index';
import Animations from '../src/Animations';
import path from 'path';

jest.setTimeout(64000);

describe('animations', () => {
  test('default', async () => {
    const buffer = await LPC.composite(
      LPC.body().male().dark(),
      LPC.hair().male().long().blue()
    );
    const animations = await Animations.fromBuffer(buffer);
    animations.saveToFile(path.join(__dirname, '..', 'downloads', 'redhead'));
  });
});
