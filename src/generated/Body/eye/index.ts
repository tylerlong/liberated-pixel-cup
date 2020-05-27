import Folder from '../../../Folder';
import Blood from './blood';

class Eye extends Folder {
  blood() {
    return new Blood(this.rootPath, this.path);
  }
}

export default Eye;
