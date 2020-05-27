import Folder from '../../../../Folder';
import No from './no';

class Female extends Folder {
  no() {
    return new No(this.rootPath, this.path);
  }
}

export default Female;
