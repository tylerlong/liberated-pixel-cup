import Folder from '../../../../../../../../Folder';
import Wc from './wc';

class Pirate extends Folder {
  wc() {
    return new Wc(this.rootPath, this.path);
  }
}

export default Pirate;
