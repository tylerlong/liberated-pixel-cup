import Folder from '../../../../Folder';
import Red from './red';

class Female extends Folder {
  red() {
    return new Red(this.rootPath, this.path);
  }
}

export default Female;
