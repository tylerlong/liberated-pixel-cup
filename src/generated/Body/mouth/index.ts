import Folder from '../../../Folder';
import Blood from './blood';

class Mouth extends Folder {
  blood() {
    return new Blood(this.rootPath, this.path);
  }
}

export default Mouth;
