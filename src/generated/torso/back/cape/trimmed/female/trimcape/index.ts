import Folder from '../../../../../../../Folder';
import Whiteblue from './whiteblue';

class Trimcape extends Folder {
  whiteblue() {
    return new Whiteblue(this.rootPath, this.path);
  }
}

export default Trimcape;
