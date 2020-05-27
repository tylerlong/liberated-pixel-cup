import Folder from '../../../../../../Folder';
import Black from './black';
import Blue from './blue';
import Brown from './brown';
import Gray from './gray';
import Green from './green';
import Lavender from './lavender';
import Maroon from './maroon';
import Pink from './pink';
import Red from './red';
import White from './white';
import Yellow from './yellow';

class Male extends Folder {
  black() {
    return new Black(this.rootPath, this.path);
  }

  blue() {
    return new Blue(this.rootPath, this.path);
  }

  brown() {
    return new Brown(this.rootPath, this.path);
  }

  gray() {
    return new Gray(this.rootPath, this.path);
  }

  green() {
    return new Green(this.rootPath, this.path);
  }

  lavender() {
    return new Lavender(this.rootPath, this.path);
  }

  maroon() {
    return new Maroon(this.rootPath, this.path);
  }

  pink() {
    return new Pink(this.rootPath, this.path);
  }

  red() {
    return new Red(this.rootPath, this.path);
  }

  white() {
    return new White(this.rootPath, this.path);
  }

  yellow() {
    return new Yellow(this.rootPath, this.path);
  }
}

export default Male;
