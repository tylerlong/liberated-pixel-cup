import Folder from '../../../../../Folder';
import Brown from './brown';
import Shirt from './shirt';
import Maroon from './maroon';
import Teal from './teal';
import White from './white';

class Male extends Folder {
  brown() {
    return new Brown(this.rootPath, this.path);
  }

  shirt() {
    return new Shirt(this.rootPath, this.path);
  }

  maroon() {
    return new Maroon(this.rootPath, this.path);
  }

  teal() {
    return new Teal(this.rootPath, this.path);
  }

  white() {
    return new White(this.rootPath, this.path);
  }
}

export default Male;
