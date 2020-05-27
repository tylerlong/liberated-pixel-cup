import Folder from '../../../../../Folder';
import Blonde from './blonde';

class Dark extends Folder {
  blonde() {
    return new Blonde(this.rootPath, this.path);
  }
}

export default Dark;
