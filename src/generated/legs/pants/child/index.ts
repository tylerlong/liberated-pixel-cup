import Folder from '../../../../Folder';
import Black from './black';
import Blue from './blue';
import Brown from './brown';
import Darkblue from './darkblue';
import Green from './green';
import Lightblue from './lightblue';
import Maroon from './maroon';
import Red from './red';
import White from './white';

class Child extends Folder {
  black() {
    return new Black(this.rootPath, this.path);
  }

  blue() {
    return new Blue(this.rootPath, this.path);
  }

  brown() {
    return new Brown(this.rootPath, this.path);
  }

  darkblue() {
    return new Darkblue(this.rootPath, this.path);
  }

  green() {
    return new Green(this.rootPath, this.path);
  }

  lightblue() {
    return new Lightblue(this.rootPath, this.path);
  }

  maroon() {
    return new Maroon(this.rootPath, this.path);
  }

  red() {
    return new Red(this.rootPath, this.path);
  }

  white() {
    return new White(this.rootPath, this.path);
  }
}

export default Child;
