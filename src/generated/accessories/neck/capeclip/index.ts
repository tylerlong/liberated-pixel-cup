import Folder from '../../../../Folder';
import Female from './female';

class Capeclip extends Folder {
  female() {
    return new Female(this.rootPath, this.path);
  }
}

export default Capeclip;
