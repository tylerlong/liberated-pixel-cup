import Folder from '../../../../../Folder';
import Th from './th';

class No extends Folder {
  th() {
    return new Th(this.rootPath, this.path);
  }
}

export default No;
