import Folder from '../../../Folder';
import Blood from './blood';

class Ribs extends Folder {
  blood() {
    return new Blood(this.rootPath, this.path);
  }
}

export default Ribs;
