import sharp from 'sharp';

import Hair from './generated/Hair';
import Body from './generated/Body';
import File from './File';

class LPC {
  spritesFolder: string;

  constructor(spritesFolder: string) {
    this.spritesFolder = spritesFolder;
  }

  body() {
    return new Body(this, []);
  }

  hair() {
    return new Hair(this, []);
  }

  async composite(file: File, ...files: File[]): Promise<Buffer> {
    if (files.length === 0) {
      return file.read();
    }

    return await sharp(file.read())
      .composite(files.map(f => ({input: f.read()})))
      .toBuffer();
  }
}

export default LPC;
