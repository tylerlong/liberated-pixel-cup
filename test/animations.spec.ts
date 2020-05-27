/* eslint-env jest */
import path from 'path';

import LPC from '../src/index';
import Animations from '../src/Animations';

jest.setTimeout(64000);

describe('animations', () => {
  test('default', async () => {
    const lpc = new LPC(process.env.SPRITES_FOLDER!);

    const buffer = await lpc
      .body()
      .male()
      .dark()
      .overlay(lpc.hair().male().long().blue());
    const animations = await Animations.fromBuffer(buffer);
    animations.saveToFile(path.join(__dirname, '..', 'downloads', 'redhead'));
  });
});
