/* eslint-env jest */
import LPC from '../src/index';
import Animations from '../src/Animations';
import path from 'path';

jest.setTimeout(64000);

describe('animations', () => {
  test('default', async () => {
    const lpc = new LPC(process.env.SPRITES_FOLDER!);

    const buffer = await lpc.composite(
      lpc.body().male().dark(),
      lpc.hair().male().long().blue()
    );
    const animations = await Animations.fromBuffer(buffer);
    animations.saveToFile(path.join(__dirname, '..', 'downloads', 'redhead'));
  });
});
