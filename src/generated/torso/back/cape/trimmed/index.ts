import Folder from '../../../../../Folder';
import Female from './female';

class Trimmed extends Folder {
  female() {
    return new Female(this.rootPath, this.path);
  }
}

export default Trimmed;
