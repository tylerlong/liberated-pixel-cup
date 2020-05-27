import Folder from '../../../../../Folder';
import Bottom from './bottom';

class Robe extends Folder {
  bottom() {
    return new Bottom(this.rootPath, this.path);
  }
}

export default Robe;
