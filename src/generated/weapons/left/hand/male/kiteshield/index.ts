import Folder from '../../../../../../Folder';
import Blue from './blue';
import Gray from './gray';
import Gray2 from './gray2';
import Green from './green';
import Orange from './orange';
import Red from './red';

class Kiteshield extends Folder {
  blue() {
    return new Blue(this.rootPath, this.path);
  }

  gray() {
    return new Gray(this.rootPath, this.path);
  }

  gray2() {
    return new Gray2(this.rootPath, this.path);
  }

  green() {
    return new Green(this.rootPath, this.path);
  }

  orange() {
    return new Orange(this.rootPath, this.path);
  }

  red() {
    return new Red(this.rootPath, this.path);
  }
}

export default Kiteshield;
