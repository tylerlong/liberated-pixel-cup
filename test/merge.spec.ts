/* eslint-env jest */
import LPC from '../src/index';
import fs from 'fs';
import path from 'path';

jest.setTimeout(64000);

describe('merge', () => {
  test('default', async () => {
    const f = async () => {
      await LPC.merge();
    };
    await expect(f()).rejects.toThrow(Error);

    const buffer2 = await LPC.merge(LPC.body().male().dark());
    expect(buffer2).toBeDefined();
    expect(buffer2.length).toBeGreaterThan(0);
    fs.writeFileSync(
      path.join(__dirname, '..', 'downloads', 'buffer2.png'),
      buffer2
    );

    const buffer3 = await LPC.merge(
      LPC.body().male().dark(),
      LPC.hair().male().long().blue()
    );
    expect(buffer3).toBeDefined();
    expect(buffer3.length).toBeGreaterThan(0);
    fs.writeFileSync(
      path.join(__dirname, '..', 'downloads', 'buffer3.png'),
      buffer3
    );
  });
});
