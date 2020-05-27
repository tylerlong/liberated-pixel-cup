import Folder from '../../../Folder';
import Arms from './arms';
import Chest from './chest';
import Female from './female';
import Male from './male';

class Plate extends Folder {
  arms() {
    return new Arms(this.rootPath, this.path);
  }

  chest() {
    return new Chest(this.rootPath, this.path);
  }

  female() {
    return new Female(this.rootPath, this.path);
  }

  male() {
    return new Male(this.rootPath, this.path);
  }
}

export default Plate;
