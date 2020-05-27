import Folder from '../../../../../Folder';
import Vest from './vest';
import Vestdark from './vestdark';

class Blue extends Folder {
  vest() {
    return new Vest(this.rootPath, this.path);
  }

  vestdark() {
    return new Vestdark(this.rootPath, this.path);
  }
}

export default Blue;
