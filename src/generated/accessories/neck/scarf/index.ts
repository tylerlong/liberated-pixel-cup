import Folder from '../../../../Folder';
import Black from './black';
import Blue from './blue';
import Brown from './brown';
import Grey from './grey';
import Red from './red';
import White from './white';

class Scarf extends Folder {
  black() {
    return new Black(this.rootPath, this.path);
  }

  blue() {
    return new Blue(this.rootPath, this.path);
  }

  brown() {
    return new Brown(this.rootPath, this.path);
  }

  grey() {
    return new Grey(this.rootPath, this.path);
  }

  red() {
    return new Red(this.rootPath, this.path);
  }

  white() {
    return new White(this.rootPath, this.path);
  }
}

export default Scarf;
