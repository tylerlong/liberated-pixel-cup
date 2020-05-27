import Folder from '../../../../../Folder';
import No from './no';

class Silver extends Folder {
  no() {
    return new No(this.rootPath, this.path);
  }
}

export default Silver;
