import Folder from '../../../Folder';
import _24 from './24';
import Female from './female';
import Male from './male';

class Hoods extends Folder {
  _24() {
    return new _24(this.rootPath, this.path);
  }

  female() {
    return new Female(this.rootPath, this.path);
  }

  male() {
    return new Male(this.rootPath, this.path);
  }
}

export default Hoods;
