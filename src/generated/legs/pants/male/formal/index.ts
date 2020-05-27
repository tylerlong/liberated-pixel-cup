import Folder from '../../../../../Folder';
import Stripes from './stripes';

class Formal extends Folder {
  stripes() {
    return new Stripes(this.rootPath, this.path);
  }
}

export default Formal;
