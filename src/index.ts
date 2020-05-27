import sharp from 'sharp';

import Hair from './generated/Hair';
import Body from './generated/Body';
import File from './File';

class LPC {
  static body() {
    return new Body([]);
  }

  static hair() {
    return new Hair([]);
  }

  static async composite(file: File, ...files: File[]): Promise<Buffer> {
    if (files.length === 0) {
      return await file.download();
    }

    return sharp(await file.download())
      .composite(
        await Promise.all(files.map(async f => ({input: await f.download()})))
      )
      .toBuffer();
  }
}

export default LPC;
