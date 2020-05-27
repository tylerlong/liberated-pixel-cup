import Folder from '../../../../Folder';
import Formal from './formal';
import Jacket from './jacket';
import Male from './male';

class Tabard extends Folder {
  formal() {
    return new Formal(this.rootPath, this.path);
  }

  jacket() {
    return new Jacket(this.rootPath, this.path);
  }

  male() {
    return new Male(this.rootPath, this.path);
  }
}

export default Tabard;
