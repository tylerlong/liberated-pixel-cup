import Folder from '../../../Folder';
import Female from './female';
import Male from './male';

class Cloth extends Folder {
  female() {
    return new Female(this.rootPath, this.path);
  }

  male() {
    return new Male(this.rootPath, this.path);
  }
}

export default Cloth;
