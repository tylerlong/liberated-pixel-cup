import Folder from '../../../../../Folder';
import Red from './red';

class Ruby extends Folder {
  red() {
    return new Red(this.rootPath, this.path);
  }
}

export default Ruby;
