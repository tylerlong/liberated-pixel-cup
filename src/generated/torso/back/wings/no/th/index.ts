import Folder from '../../../../../../Folder';
import Sh from './sh';

class Th extends Folder {
  sh() {
    return new Sh(this.rootPath, this.path);
  }
}

export default Th;
