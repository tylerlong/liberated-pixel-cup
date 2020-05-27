import Folder from '../../../../../../../Folder';
import Jaidynreiman from './jaidynreiman';

class Lavender extends Folder {
  jaidynreiman() {
    return new Jaidynreiman(this.rootPath, this.path);
  }
}

export default Lavender;
