/* eslint-env jest */
import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

jest.setTimeout(64000);

describe('cut', () => {
  test('default', async () => {
    const buffer = await sharp(
      path.join(__dirname, '..', 'downloads', 'body.png')
    )
      .extract({left: 0, top: 0, height: 64, width: 64 * 7})
      .toBuffer();
    fs.writeFileSync(
      path.join(__dirname, '..', 'downloads', 'body1.png'),
      buffer
    );
  });
});
