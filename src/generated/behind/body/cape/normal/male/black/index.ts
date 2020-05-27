import Folder from '../../../../../../../Folder';
import Jaidynreiman from './jaidynreiman';

class Black extends Folder {
  jaidynreiman() {
    return new Jaidynreiman(this.rootPath, this.path);
  }
}

export default Black;
