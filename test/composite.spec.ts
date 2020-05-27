/* eslint-env jest */
import LPC from '../src/index';
import fs from 'fs';
import path from 'path';

jest.setTimeout(64000);

describe('composite', () => {
  test('default', async () => {
    const buffer1 = await LPC.composite(LPC.body().male().dark());
    expect(buffer1).toBeDefined();
    expect(buffer1.length).toBeGreaterThan(0);
    fs.writeFileSync(
      path.join(__dirname, '..', 'downloads', 'buffer1.png'),
      buffer1
    );

    const buffer2 = await LPC.composite(
      LPC.body().male().dark(),
      LPC.hair().male().long().blue()
    );
    expect(buffer2).toBeDefined();
    expect(buffer2.length).toBeGreaterThan(0);
    fs.writeFileSync(
      path.join(__dirname, '..', 'downloads', 'buffer2.png'),
      buffer2
    );
  });
});
