import Folder from '../../../../Folder';
import Male from './male';

class Longsleeve extends Folder {
  male() {
    return new Male(this.rootPath, this.path);
  }
}

export default Longsleeve;
