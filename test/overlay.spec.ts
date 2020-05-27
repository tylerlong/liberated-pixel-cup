/* eslint-env jest */
import fs from 'fs';
import path from 'path';

import LPC from '../src/index';

jest.setTimeout(64000);

describe('overlay', () => {
  test('default', async () => {
    const lpc = new LPC(process.env.LPC_SPRITES_FOLDER!);

    const buffer1 = await lpc.body().male().dark().overlay(); // doesn't make much sense to overlay nothing
    expect(buffer1).toBeDefined();
    expect(buffer1.length).toBeGreaterThan(0);
    fs.writeFileSync(
      path.join(__dirname, '..', 'downloads', 'buffer1.png'),
      buffer1
    );

    const buffer2 = await lpc
      .body()
      .male()
      .dark()
      .overlay(lpc.hair().male().long().blue());
    expect(buffer2).toBeDefined();
    expect(buffer2.length).toBeGreaterThan(0);
    fs.writeFileSync(
      path.join(__dirname, '..', 'downloads', 'buffer2.png'),
      buffer2
    );

    const buffer3 = await lpc.overlay(
      lpc.body().male().dark(),
      lpc.hair().male().long().blue()
    );
    expect(buffer3).toBeDefined();
    expect(buffer3.length).toBeGreaterThan(0);
    fs.writeFileSync(
      path.join(__dirname, '..', 'downloads', 'buffer3.png'),
      buffer3
    );
  });
});
