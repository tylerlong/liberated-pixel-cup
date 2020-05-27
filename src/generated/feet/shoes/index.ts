import Folder from '../../../Folder';
import Female from './female';
import Longboots from './longboots';
import Male from './male';

class Shoes extends Folder {
  female() {
    return new Female(this.rootPath, this.path);
  }

  longboots() {
    return new Longboots(this.rootPath, this.path);
  }

  male() {
    return new Male(this.rootPath, this.path);
  }
}

export default Shoes;
