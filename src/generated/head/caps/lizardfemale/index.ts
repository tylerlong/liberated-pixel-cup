import Folder from '../../../../Folder';
import Bandage from './bandage';
import Fin from './fin';
import Hood from './hood';
import Horn1 from './horn1';
import Horn2 from './horn2';
import Shortfin from './shortfin';

class Lizardfemale extends Folder {
  bandage() {
    return new Bandage(this.rootPath, this.path);
  }

  fin() {
    return new Fin(this.rootPath, this.path);
  }

  hood() {
    return new Hood(this.rootPath, this.path);
  }

  horn1() {
    return new Horn1(this.rootPath, this.path);
  }

  horn2() {
    return new Horn2(this.rootPath, this.path);
  }

  shortfin() {
    return new Shortfin(this.rootPath, this.path);
  }
}

export default Lizardfemale;
