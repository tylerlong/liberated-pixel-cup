import Folder from '../../../../../../../Folder';
import Jaidynreiman from './jaidynreiman';

class Blue extends Folder {
  jaidynreiman() {
    return new Jaidynreiman(this.rootPath, this.path);
  }
}

export default Blue;
