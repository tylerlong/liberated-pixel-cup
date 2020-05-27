import Folder from '../../../../Folder';
import Either from './either';
import Female from './female';
import Male from './male';

class Hand extends Folder {
  either() {
    return new Either(this.rootPath, this.path);
  }

  female() {
    return new Female(this.rootPath, this.path);
  }

  male() {
    return new Male(this.rootPath, this.path);
  }
}

export default Hand;
