import Folder from '../../../../Folder';
import Blue from './blue';
import Brown from './brown';
import Casting from './casting';
import Gray from './gray';
import Green from './green';
import Orange from './orange';
import Purple from './purple';
import Red from './red';
import Yellow from './yellow';

class Eyes extends Folder {
  blue() {
    return new Blue(this.rootPath, this.path);
  }

  brown() {
    return new Brown(this.rootPath, this.path);
  }

  casting() {
    return new Casting(this.rootPath, this.path);
  }

  gray() {
    return new Gray(this.rootPath, this.path);
  }

  green() {
    return new Green(this.rootPath, this.path);
  }

  orange() {
    return new Orange(this.rootPath, this.path);
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

export default Eyes;
