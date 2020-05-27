import Folder from '../../../../../Folder';
import Black from './black';
import Blue from './blue';
import Green from './green';
import Purple from './purple';
import Red from './red';
import Yellow from './yellow';

class Male extends Folder {
  black() {
    return new Black(this.rootPath, this.path);
  }

  blue() {
    return new Blue(this.rootPath, this.path);
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
}

export default Male;
