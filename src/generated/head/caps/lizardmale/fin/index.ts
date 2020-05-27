import Folder from '../../../../../Folder';
import Blue from './blue';
import Dark from './dark';
import Light from './light';

class Fin extends Folder {
  blue() {
    return new Blue(this.rootPath, this.path);
  }

  dark() {
    return new Dark(this.rootPath, this.path);
  }

  light() {
    return new Light(this.rootPath, this.path);
  }
}

export default Fin;
