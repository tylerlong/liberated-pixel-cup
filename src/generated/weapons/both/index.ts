import Folder from '../../../Folder';
import Hand from './hand';

class Both extends Folder {
  hand() {
    return new Hand(this.rootPath, this.path);
  }
}

export default Both;
