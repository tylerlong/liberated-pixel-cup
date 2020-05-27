import Folder from '../../../../../Folder';
import Blonde from './blonde';
import Blonde2 from './blonde2';

class Light extends Folder {
  blonde() {
    return new Blonde(this.rootPath, this.path);
  }

  blonde2() {
    return new Blonde2(this.rootPath, this.path);
  }
}

export default Light;
