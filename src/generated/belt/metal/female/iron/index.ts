import Folder from '../../../../../Folder';
import No from './no';

class Iron extends Folder {
  no() {
    return new No(this.rootPath, this.path);
  }
}

export default Iron;
