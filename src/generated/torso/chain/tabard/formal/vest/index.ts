import Folder from '../../../../../../Folder';
import Stripes from './stripes';

class Vest extends Folder {
  stripes() {
    return new Stripes(this.rootPath, this.path);
  }
}

export default Vest;
