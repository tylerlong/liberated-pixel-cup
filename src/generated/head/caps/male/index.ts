import Folder from '../../../../Folder';
import Leather from './leather';
import Moon from './moon';
import Nomoon from './nomoon';

class Male extends Folder {
  leather() {
    return new Leather(this.rootPath, this.path);
  }

  moon() {
    return new Moon(this.rootPath, this.path);
  }

  nomoon() {
    return new Nomoon(this.rootPath, this.path);
  }
}

export default Male;
