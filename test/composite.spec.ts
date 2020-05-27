/* eslint-env jest */
import fs from 'fs';
import path from 'path';

import LPC from '../src/index';

jest.setTimeout(64000);

describe('composite', () => {
  test('default', async () => {
    const lpc = new LPC(process.env.SPRITES_FOLDER!);

    const buffer1 = await lpc.composite(lpc.body().male().dark());
    expect(buffer1).toBeDefined();
    expect(buffer1.length).toBeGreaterThan(0);
    fs.writeFileSync(
      path.join(__dirname, '..', 'downloads', 'buffer1.png'),
      buffer1
    );

    const buffer2 = await lpc.composite(
      lpc.body().male().dark(),
      lpc.hair().male().long().blue()
    );
    expect(buffer2).toBeDefined();
    expect(buffer2.length).toBeGreaterThan(0);
    fs.writeFileSync(
      path.join(__dirname, '..', 'downloads', 'buffer2.png'),
      buffer2
    );
  });
});
