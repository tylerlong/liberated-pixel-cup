import Folder from '../../../../../Folder';
import Black from './black';
import Brown from './brown';

class Tophat extends Folder {
  black() {
    return new Black(this.rootPath, this.path);
  }

  brown() {
    return new Brown(this.rootPath, this.path);
  }
}

export default Tophat;
