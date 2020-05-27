import Folder from '../../../../Folder';
import Formal from './formal';
import Magenta from './magenta';
import Black from './black';
import Blue from './blue';
import Brown from './brown';
import Green from './green';
import Purple from './purple';
import Red from './red';
import Yellow from './yellow';
import Musc from './musc';
import Red2 from './red2';
import Teal from './teal';
import White from './white';

class Male extends Folder {
  formal() {
    return new Formal(this.rootPath, this.path);
  }

  magenta() {
    return new Magenta(this.rootPath, this.path);
  }

  black() {
    return new Black(this.rootPath, this.path);
  }

  blue() {
    return new Blue(this.rootPath, this.path);
  }

  brown() {
    return new Brown(this.rootPath, this.path);
  }

  green() {
    return new Green(this.rootPath, this.path);
  }

  purple() {
    return new Purple(this.rootPath, this.path);
  }

  red() {
    return new Red(this.rootPath, this.path);
  }

  yellow() {
    return new Yellow(this.rootPath, this.path);
  }

  musc() {
    return new Musc(this.rootPath, this.path);
  }

  red2() {
    return new Red2(this.rootPath, this.path);
  }

  teal() {
    return new Teal(this.rootPath, this.path);
  }

  white() {
    return new White(this.rootPath, this.path);
  }
}

export default Male;
