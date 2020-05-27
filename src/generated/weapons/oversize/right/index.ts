import Folder from '../../../../Folder';
import Hand from './hand';

class Right extends Folder {
  hand() {
    return new Hand(this.rootPath, this.path);
  }
}

export default Right;
