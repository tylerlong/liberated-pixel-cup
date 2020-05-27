import Folder from '../../../../../Folder';
import White from './white';

class Male extends Folder {
  white() {
    return new White(this.rootPath, this.path);
  }
}

export default Male;
