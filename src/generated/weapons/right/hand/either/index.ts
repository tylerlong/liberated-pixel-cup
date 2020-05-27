import Folder from '../../../../../Folder';
import _10 from './10';
import _6 from './6';
import _7 from './7';
import _8 from './8';
import _9 from './9';
import Bow from './bow';
import Greatbow from './greatbow';
import Recurvebow from './recurvebow';

class Either extends Folder {
  _10() {
    return new _10(this.rootPath, this.path);
  }

  _6() {
    return new _6(this.rootPath, this.path);
  }

  _7() {
    return new _7(this.rootPath, this.path);
  }

  _8() {
    return new _8(this.rootPath, this.path);
  }

  _9() {
    return new _9(this.rootPath, this.path);
  }

  bow() {
    return new Bow(this.rootPath, this.path);
  }

  greatbow() {
    return new Greatbow(this.rootPath, this.path);
  }

  recurvebow() {
    return new Recurvebow(this.rootPath, this.path);
  }
}

export default Either;
