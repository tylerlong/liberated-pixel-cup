import Folder from '../../../../Folder';
import Brown from './brown';
import Maroon from './maroon';
import Teal from './teal';
import White from './white';

class Female extends Folder {
  brown() {
    return new Brown(this.rootPath, this.path);
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

export default Female;
