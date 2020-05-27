import Folder from '../../../../Folder';
import Shirt from './shirt';

class Pirate extends Folder {
  shirt() {
    return new Shirt(this.rootPath, this.path);
  }
}

export default Pirate;
