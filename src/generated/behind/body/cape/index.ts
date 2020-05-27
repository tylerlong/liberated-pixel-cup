import Folder from '../../../../Folder';
import Normal from './normal';
import Tattered from './tattered';

class Cape extends Folder {
  normal() {
    return new Normal(this.rootPath, this.path);
  }

  tattered() {
    return new Tattered(this.rootPath, this.path);
  }
}

export default Cape;
