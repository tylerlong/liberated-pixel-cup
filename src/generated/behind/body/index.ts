import Folder from '../../../Folder';
import Cape from './cape';
import Equipment from './equipment';

class Body extends Folder {
  cape() {
    return new Cape(this.rootPath, this.path);
  }

  equipment() {
    return new Equipment(this.rootPath, this.path);
  }
}

export default Body;
