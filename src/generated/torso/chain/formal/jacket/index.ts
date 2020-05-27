import Folder from '../../../../../Folder';
import Black from './black';
import Brown from './brown';
import Tan from './tan';

class Jacket extends Folder {
  black() {
    return new Black(this.rootPath, this.path);
  }

  brown() {
    return new Brown(this.rootPath, this.path);
  }

  tan() {
    return new Tan(this.rootPath, this.path);
  }
}

export default Jacket;
