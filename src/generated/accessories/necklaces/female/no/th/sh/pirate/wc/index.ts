import Folder from '../../../../../../../../../Folder';
import Sc from './sc';

class Wc extends Folder {
  sc() {
    return new Sc(this.rootPath, this.path);
  }
}

export default Wc;
