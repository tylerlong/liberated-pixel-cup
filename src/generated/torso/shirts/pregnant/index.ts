import Folder from '../../../../Folder';
import Clothes from './clothes';

class Pregnant extends Folder {
  clothes() {
    return new Clothes(this.rootPath, this.path);
  }
}

export default Pregnant;
