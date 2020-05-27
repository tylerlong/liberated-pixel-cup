import Folder from '../../../Folder';
import Female from './female';
import Formal from './formal';
import Lizard from './lizard';
import Lizardfemale from './lizardfemale';
import Lizardmale from './lizardmale';
import Male from './male';

class Caps extends Folder {
  female() {
    return new Female(this.rootPath, this.path);
  }

  formal() {
    return new Formal(this.rootPath, this.path);
  }

  lizard() {
    return new Lizard(this.rootPath, this.path);
  }

  lizardfemale() {
    return new Lizardfemale(this.rootPath, this.path);
  }

  lizardmale() {
    return new Lizardmale(this.rootPath, this.path);
  }

  male() {
    return new Male(this.rootPath, this.path);
  }
}

export default Caps;
