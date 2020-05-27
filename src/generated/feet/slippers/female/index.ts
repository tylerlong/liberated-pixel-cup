import Folder from '../../../../Folder';
import Black from './black';
import Brown from './brown';
import Gray from './gray';
import White from './white';

class Female extends Folder {
  black() {
    return new Black(this.rootPath, this.path);
  }

  brown() {
    return new Brown(this.rootPath, this.path);
  }

  gray() {
    return new Gray(this.rootPath, this.path);
  }

  white() {
    return new White(this.rootPath, this.path);
  }
}

export default Female;
