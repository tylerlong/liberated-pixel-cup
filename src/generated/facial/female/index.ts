import Folder from '../../../Folder';
import Mask from './mask';

class Female extends Folder {
  mask() {
    return new Mask(this.rootPath, this.path);
  }
}

export default Female;
