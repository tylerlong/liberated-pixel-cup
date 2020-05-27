import Dark from './Dark';
import Folder from '../../../Folder';

class Male extends Folder {
  dark() {
    return new Dark(this.rootPath, this.path);
  }
}

export default Male;
