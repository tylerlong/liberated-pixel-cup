import Folder from '../../../../../../../Folder';
import Jaidynreiman from './jaidynreiman';

class White extends Folder {
  jaidynreiman() {
    return new Jaidynreiman(this.rootPath, this.path);
  }
}

export default White;
