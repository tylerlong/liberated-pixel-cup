import Folder from '../../../../Folder';
import Shirt from './shirt';
import Stripes from './stripes';

class Formal extends Folder {
  shirt() {
    return new Shirt(this.rootPath, this.path);
  }

  stripes() {
    return new Stripes(this.rootPath, this.path);
  }
}

export default Formal;
