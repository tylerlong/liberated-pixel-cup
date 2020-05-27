import Folder from '../../../../Folder';
import Sandals from './sandals';
import Black from './black';
import Brown from './brown';
import Maroon from './maroon';

class Male extends Folder {
  sandals() {
    return new Sandals(this.rootPath, this.path);
  }

  black() {
    return new Black(this.rootPath, this.path);
  }

  brown() {
    return new Brown(this.rootPath, this.path);
  }

  maroon() {
    return new Maroon(this.rootPath, this.path);
  }
}

export default Male;
