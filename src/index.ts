import sharp from 'sharp';

import Hair from './Hair';
import Body from './Body';
import File from './File';

class LPC {
  static body() {
    return new Body([]);
  }

  static hair() {
    return new Hair([]);
  }

  static async merge(...files: File[]): Promise<Buffer> {
    if (files.length === 0) {
      throw new Error('no file to merge');
    }
    if (files.length === 1) {
      return await files[0].download();
    }

    return sharp(await files[0].download())
      .composite(
        await Promise.all(
          files.slice(1).map(async file => ({input: await file.download()}))
        )
      )
      .toBuffer();
  }
}

export default LPC;
