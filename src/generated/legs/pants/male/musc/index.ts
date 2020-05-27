import Folder from '../../../../../Folder';
import White from './white';

class Musc extends Folder {
  white() {
    return new White(this.rootPath, this.path);
  }
}

export default Musc;
