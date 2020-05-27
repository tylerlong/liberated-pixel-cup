import Folder from '../../../../../../../Folder';
import Blue from './blue';
import Red from './red';

class Glowsword extends Folder {
  blue() {
    return new Blue(this.rootPath, this.path);
  }

  red() {
    return new Red(this.rootPath, this.path);
  }
}

export default Glowsword;
