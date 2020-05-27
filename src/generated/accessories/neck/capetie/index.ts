import Folder from '../../../../Folder';
import Female from './female';

class Capetie extends Folder {
  female() {
    return new Female(this.rootPath, this.path);
  }
}

export default Capetie;
