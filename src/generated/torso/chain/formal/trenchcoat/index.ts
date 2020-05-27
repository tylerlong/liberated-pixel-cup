import Folder from '../../../../../Folder';
import Grey from './grey';

class Trenchcoat extends Folder {
  grey() {
    return new Grey(this.rootPath, this.path);
  }
}

export default Trenchcoat;
