import Folder from '../../../../Folder';
import Blue from './blue';
import Complete from './complete';
import Dark from './dark';
import Red from './red';

class Drake extends Folder {
  blue() {
    return new Blue(this.rootPath, this.path);
  }

  complete() {
    return new Complete(this.rootPath, this.path);
  }

  dark() {
    return new Dark(this.rootPath, this.path);
  }

  red() {
    return new Red(this.rootPath, this.path);
  }
}

export default Drake;
