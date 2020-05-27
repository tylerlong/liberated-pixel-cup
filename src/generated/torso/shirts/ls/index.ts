import Folder from '../../../../Folder';
import Blouse from './blouse';
import Shirt from './shirt';

class Ls extends Folder {
  blouse() {
    return new Blouse(this.rootPath, this.path);
  }

  shirt() {
    return new Shirt(this.rootPath, this.path);
  }
}

export default Ls;
