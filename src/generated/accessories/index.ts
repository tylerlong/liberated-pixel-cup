import Folder from '../../Folder';
import Neck from './neck';
import Necklaces from './necklaces';
import Ties from './ties';

class Accessories extends Folder {
  neck() {
    return new Neck(this.rootPath, this.path);
  }

  necklaces() {
    return new Necklaces(this.rootPath, this.path);
  }

  ties() {
    return new Ties(this.rootPath, this.path);
  }
}

export default Accessories;
