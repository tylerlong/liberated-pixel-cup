/* eslint-env jest */
import axios from 'axios';
import fs from 'fs';
import path from 'path';

import LPC from '../src/index';

jest.setTimeout(64000);

describe('download', () => {
  test('default', async () => {
    const r1 = await axios.get(
      `https://github.com/tylerlong/Universal-LPC-spritesheet/raw/master/${LPC.body()
        .male()
        .dark()
        .path()
        .join('/')}.png`,
      {responseType: 'arraybuffer'}
    );
    fs.writeFileSync(
      path.join(__dirname, '..', 'downloads', 'body.png'),
      r1.data
    );
    const r2 = await axios.get(
      `https://github.com/tylerlong/Universal-LPC-spritesheet/raw/master/${LPC.hair()
        .male()
        .long()
        .blue()
        .path()
        .join('/')}.png`,
      {responseType: 'arraybuffer'}
    );
    fs.writeFileSync(
      path.join(__dirname, '..', 'downloads', 'hair.png'),
      r2.data
    );
  });
});
