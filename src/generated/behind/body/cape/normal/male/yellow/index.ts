import Folder from '../../../../../../../Folder';
import Jaidynreiman from './jaidynreiman';

class Yellow extends Folder {
  jaidynreiman() {
    return new Jaidynreiman(this.rootPath, this.path);
  }
}

export default Yellow;
