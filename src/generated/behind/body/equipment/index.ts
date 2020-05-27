import Folder from '../../../../Folder';
import Quiver from './quiver';

class Equipment extends Folder {
  quiver() {
    return new Quiver(this.rootPath, this.path);
  }
}

export default Equipment;
