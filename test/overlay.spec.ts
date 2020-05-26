/* eslint-env jest */
import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

jest.setTimeout(64000);

describe('default', () => {
  test('overlay', async () => {
    const bodyPath = path.join(__dirname, '..', 'downloads', 'body.png');
    const hairPath = path.join(__dirname, '..', 'downloads', 'hair.png');
    const resultPath = path.join(__dirname, '..', 'downloads', 'result.png');
    const resultBuffer = await sharp(bodyPath)
      .composite([{input: hairPath}])
      .toBuffer();
    fs.writeFileSync(resultPath, resultBuffer);
  });
});
