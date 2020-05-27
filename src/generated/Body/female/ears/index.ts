import Folder from '../../../../Folder';
import Bigears from './bigears';
import Elvenears from './elvenears';

class Ears extends Folder {
  bigears() {
    return new Bigears(this.rootPath, this.path);
  }

  elvenears() {
    return new Elvenears(this.rootPath, this.path);
  }
}

export default Ears;
