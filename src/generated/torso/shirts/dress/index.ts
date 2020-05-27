import Folder from '../../../../Folder';
import Tightdress from './tightdress';

class Dress extends Folder {
  tightdress() {
    return new Tightdress(this.rootPath, this.path);
  }
}

export default Dress;
