import Folder from '../../../../Folder';
import _8 from './8';
import _9 from './9';
import Iverness from './iverness';
import Jacket from './jacket';
import Trenchcoat from './trenchcoat';
import Vest from './vest';

class Formal extends Folder {
  _8() {
    return new _8(this.rootPath, this.path);
  }

  _9() {
    return new _9(this.rootPath, this.path);
  }

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
