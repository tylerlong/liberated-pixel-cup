import File from './File';
import Root from './generated';
export {default as Animations} from './Animations';

class LPC extends Root {
  constructor(spriteFolder: string) {
    super(spriteFolder, []);
  }
  async overlay(file: File, ...files: File[]): Promise<Buffer> {
    return file.overlay(...files);
  }
}

export default LPC;
