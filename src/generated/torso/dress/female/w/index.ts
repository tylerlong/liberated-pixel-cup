import Folder from '../../../../../Folder';
import Sash from './sash';

class W extends Folder {
  sash() {
    return new Sash(this.rootPath, this.path);
  }
}

export default W;
