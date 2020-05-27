import Folder from '../../../../../../../Folder';
import Black from './black';
import Blue from './blue';
import Brown from './brown';
import Dark from './dark';
import Forest from './forest';
import Light from './light';
import Purple from './purple';
import Red from './red';
import White from './white';

class Sh extends Folder {
  black() {
    return new Black(this.rootPath, this.path);
  }

  blue() {
    return new Blue(this.rootPath, this.path);
  }

  brown() {
    return new Brown(this.rootPath, this.path);
  }

  dark() {
    return new Dark(this.rootPath, this.path);
  }

  forest() {
    return new Forest(this.rootPath, this.path);
  }

  light() {
    return new Light(this.rootPath, this.path);
  }

  purple() {
    return new Purple(this.rootPath, this.path);
  }

  red() {
    return new Red(this.rootPath, this.path);
  }

  white() {
    return new White(this.rootPath, this.path);
  }
}

export default Sh;
