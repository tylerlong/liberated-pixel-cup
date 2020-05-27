import Folder from '../../../Folder';
import Hand from './hand';

class Left extends Folder {
  hand() {
    return new Hand(this.rootPath, this.path);
  }
}

export default Left;
