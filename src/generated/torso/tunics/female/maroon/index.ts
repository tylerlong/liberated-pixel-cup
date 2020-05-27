import Folder from '../../../../../Folder';
import Tunic from './tunic';

class Maroon extends Folder {
  tunic() {
    return new Tunic(this.rootPath, this.path);
  }
}

export default Maroon;
