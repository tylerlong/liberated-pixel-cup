import Folder from '../../../../../Folder';
import No from './no';

class Bronze extends Folder {
  no() {
    return new No(this.rootPath, this.path);
  }
}

export default Bronze;
