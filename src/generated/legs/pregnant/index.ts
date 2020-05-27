import Folder from '../../../Folder';
import Pants from './pants';

class Pregnant extends Folder {
  pants() {
    return new Pants(this.rootPath, this.path);
  }
}

export default Pregnant;
