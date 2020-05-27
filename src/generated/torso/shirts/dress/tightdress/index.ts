import Folder from '../../../../../Folder';
import Black from './black';
import Lightblue from './lightblue';
import Red from './red';
import White from './white';

class Tightdress extends Folder {
  black() {
    return new Black(this.rootPath, this.path);
  }

  lightblue() {
    return new Lightblue(this.rootPath, this.path);
  }

  red() {
    return new Red(this.rootPath, this.path);
  }

  white() {
    return new White(this.rootPath, this.path);
  }
}

export default Tightdress;
