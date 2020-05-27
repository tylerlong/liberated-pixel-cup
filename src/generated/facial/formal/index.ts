import Folder from '../../../Folder';
import Glasses from './glasses';
import Monocle from './monocle';

class Formal extends Folder {
  glasses() {
    return new Glasses(this.rootPath, this.path);
  }

  monocle() {
    return new Monocle(this.rootPath, this.path);
  }
}

export default Formal;
