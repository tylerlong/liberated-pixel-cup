import Folder from '../../../Folder';
import _11 from './11';
import _38 from './38';
import _39 from './39';
import Female from './female';
import Male from './male';

class Bandanas extends Folder {
  _11() {
    return new _11(this.rootPath, this.path);
  }

  _38() {
    return new _38(this.rootPath, this.path);
  }

  _39() {
    return new _39(this.rootPath, this.path);
  }

  female() {
    return new Female(this.rootPath, this.path);
  }

  male() {
    return new Male(this.rootPath, this.path);
  }
}

export default Bandanas;
