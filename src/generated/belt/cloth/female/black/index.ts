import Folder from '../../../../../Folder';
import No from './no';

class Black extends Folder {
  no() {
    return new No(this.rootPath, this.path);
  }
}

export default Black;
