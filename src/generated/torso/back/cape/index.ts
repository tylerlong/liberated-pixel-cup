import Folder from '../../../../Folder';
import Normal from './normal';
import Tattered from './tattered';
import Trimmed from './trimmed';

class Cape extends Folder {
  normal() {
    return new Normal(this.rootPath, this.path);
  }

  tattered() {
    return new Tattered(this.rootPath, this.path);
  }

  trimmed() {
    return new Trimmed(this.rootPath, this.path);
  }
}

export default Cape;
