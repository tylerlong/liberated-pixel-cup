import Male from './Male';
import Folder from '../../Folder';

class Hair extends Folder {
  male() {
    return new Male(this.rootPath, this.path);
  }
}

export default Hair;
