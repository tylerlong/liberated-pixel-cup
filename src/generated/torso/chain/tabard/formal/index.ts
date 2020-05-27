import Folder from '../../../../../Folder';
import Iverness from './iverness';
import Jacket from './jacket';
import Trenchcoat from './trenchcoat';
import Vest from './vest';

class Formal extends Folder {
  iverness() {
    return new Iverness(this.rootPath, this.path);
  }

  jacket() {
    return new Jacket(this.rootPath, this.path);
  }

  trenchcoat() {
    return new Trenchcoat(this.rootPath, this.path);
  }

  vest() {
    return new Vest(this.rootPath, this.path);
  }
}

export default Formal;
