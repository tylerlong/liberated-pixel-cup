import Folder from '../../../Folder';
import Child from './child';
import Female from './female';
import Male from './male';

class Skirt extends Folder {
  child() {
    return new Child(this.rootPath, this.path);
  }

  female() {
    return new Female(this.rootPath, this.path);
  }

  male() {
    return new Male(this.rootPath, this.path);
  }
}

export default Skirt;
