import Folder from '../../../../../Folder';
import Tunic from './tunic';

class Brown extends Folder {
  tunic() {
    return new Tunic(this.rootPath, this.path);
  }
}

export default Brown;
