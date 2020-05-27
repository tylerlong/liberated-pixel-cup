import Folder from '../../Folder';
import _3 from './3';
import _5 from './5';
import Female from './female';
import Formal from './formal';
import Male from './male';

class Facial extends Folder {
  _3() {
    return new _3(this.rootPath, this.path);
  }

  _5() {
    return new _5(this.rootPath, this.path);
  }

  female() {
    return new Female(this.rootPath, this.path);
  }

  formal() {
    return new Formal(this.rootPath, this.path);
  }

  male() {
    return new Male(this.rootPath, this.path);
  }
}

export default Facial;
