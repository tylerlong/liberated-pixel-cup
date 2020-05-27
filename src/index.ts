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

  async overlay(file: File, ...files: File[]): Promise<Buffer> {
    return file.overlay(...files);
  }
}

export default LPC;
