import Folder from '../../../../Folder';
import Black from './black';
import Brown from './brown';
import Teal2 from './teal2';
import White from './white';

class Female extends Folder {
  black() {
    return new Black(this.rootPath, this.path);
  }

  brown() {
    return new Brown(this.rootPath, this.path);
  }

  teal2() {
    return new Teal2(this.rootPath, this.path);
  }

  white() {
    return new White(this.rootPath, this.path);
  }
}

export default Female;
