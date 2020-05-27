import File from './File';
import Root from './generated/Root';
export {default as Animations} from './Animations';

class LPC extends Root {
  async overlay(file: File, ...files: File[]): Promise<Buffer> {
    return file.overlay(...files);
  }
}

export default LPC;
