import Folder from '../../../../../../../Folder';
import Jaidynreiman from './jaidynreiman';

class Gray extends Folder {
  jaidynreiman() {
    return new Jaidynreiman(this.rootPath, this.path);
  }
}

export default Gray;
