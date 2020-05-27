import Folder from '../../../Folder';
import _36 from './36';
import _37 from './37';
import _38 from './38';
import Halberd from './halberd';
import Right from './right';
import Thrust from './thrust';

class Oversize extends Folder {
  _36() {
    return new _36(this.rootPath, this.path);
  }

  _37() {
    return new _37(this.rootPath, this.path);
  }

  _38() {
    return new _38(this.rootPath, this.path);
  }

  halberd() {
    return new Halberd(this.rootPath, this.path);
  }

  right() {
    return new Right(this.rootPath, this.path);
  }

  thrust() {
    return new Thrust(this.rootPath, this.path);
  }
}

export default Oversize;
