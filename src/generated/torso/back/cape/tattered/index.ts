import Folder from '../../../../../Folder';
import Female from './female';

class Tattered extends Folder {
  female() {
    return new Female(this.rootPath, this.path);
  }
}

export default Tattered;
