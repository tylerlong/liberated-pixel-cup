import Folder from '../../../../../Folder';
import Incomplete from './incomplete';

class Robe extends Folder {
  incomplete() {
    return new Incomplete(this.rootPath, this.path);
  }
}

export default Robe;
