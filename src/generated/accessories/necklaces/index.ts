import Folder from '../../../Folder';
import Female from './female';

class Necklaces extends Folder {
  female() {
    return new Female(this.rootPath, this.path);
  }
}

export default Necklaces;
