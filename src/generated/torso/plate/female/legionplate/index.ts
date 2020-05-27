import Folder from '../../../../../Folder';
import Bronze from './bronze';
import Gold from './gold';
import Steel from './steel';

class Legionplate extends Folder {
  bronze() {
    return new Bronze(this.rootPath, this.path);
  }

  gold() {
    return new Gold(this.rootPath, this.path);
  }

  steel() {
    return new Steel(this.rootPath, this.path);
  }
}

export default Legionplate;
