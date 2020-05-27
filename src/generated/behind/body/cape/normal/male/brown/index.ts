import Folder from '../../../../../../../Folder';
import Jaidynreiman from './jaidynreiman';

class Brown extends Folder {
  jaidynreiman() {
    return new Jaidynreiman(this.rootPath, this.path);
  }
}

export default Brown;
