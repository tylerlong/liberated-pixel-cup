import Folder from '../../../../../Folder';
import No from './no';

class Brown extends Folder {
  no() {
    return new No(this.rootPath, this.path);
  }
}

export default Brown;
