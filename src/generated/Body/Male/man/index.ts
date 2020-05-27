import Folder from '../../../../Folder';
import Black from './black';
import Brown from './brown';
import Olive from './olive';
import Peach from './peach';
import White from './white';

class Man extends Folder {
  black() {
    return new Black(this.rootPath, this.path);
  }

  brown() {
    return new Brown(this.rootPath, this.path);
  }

  olive() {
    return new Olive(this.rootPath, this.path);
  }

  peach() {
    return new Peach(this.rootPath, this.path);
  }

  white() {
    return new White(this.rootPath, this.path);
  }
}

export default Man;
