import Folder from '../../../../../Folder';
import No from './no';

class Gold extends Folder {
  no() {
    return new No(this.rootPath, this.path);
  }
}

export default Gold;
