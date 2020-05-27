import Folder from '../../../../../../../Folder';
import Jaidynreiman from './jaidynreiman';

class Pink extends Folder {
  jaidynreiman() {
    return new Jaidynreiman(this.rootPath, this.path);
  }
}

export default Pink;
