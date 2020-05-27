import Folder from '../../../../../../../Folder';
import Lund from './lund';

class Sj extends Folder {
  lund() {
    return new Lund(this.rootPath, this.path);
  }
}

export default Sj;
