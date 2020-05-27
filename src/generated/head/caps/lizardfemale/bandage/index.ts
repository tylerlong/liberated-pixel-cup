import Folder from '../../../../../Folder';
import Red from './red';

class Bandage extends Folder {
  red() {
    return new Red(this.rootPath, this.path);
  }
}

export default Bandage;
