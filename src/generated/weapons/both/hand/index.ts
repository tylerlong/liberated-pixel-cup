import Folder from '../../../../Folder';
import Formal from './formal';
import Spear from './spear';

class Hand extends Folder {
  formal() {
    return new Formal(this.rootPath, this.path);
  }

  spear() {
    return new Spear(this.rootPath, this.path);
  }
}

export default Hand;
