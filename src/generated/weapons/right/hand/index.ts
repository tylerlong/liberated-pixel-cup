import Folder from '../../../../Folder';
import Either from './either';
import Female from './female';
import Formal from './formal';
import Long from './long';
import Male from './male';
import Shovel from './shovel';

class Hand extends Folder {
  either() {
    return new Either(this.rootPath, this.path);
  }

  female() {
    return new Female(this.rootPath, this.path);
  }

  formal() {
    return new Formal(this.rootPath, this.path);
  }

  long() {
    return new Long(this.rootPath, this.path);
  }

  male() {
    return new Male(this.rootPath, this.path);
  }

  shovel() {
    return new Shovel(this.rootPath, this.path);
  }
}

export default Hand;
