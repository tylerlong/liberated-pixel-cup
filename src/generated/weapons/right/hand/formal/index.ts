import Folder from '../../../../../Folder';
import Cane from './cane';

class Formal extends Folder {
  cane() {
    return new Cane(this.rootPath, this.path);
  }
}

export default Formal;
