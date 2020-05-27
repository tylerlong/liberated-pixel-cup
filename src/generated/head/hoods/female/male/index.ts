import Folder from '../../../../../Folder';
import Hood from './hood';

class Male extends Folder {
  hood() {
    return new Hood(this.rootPath, this.path);
  }
}

export default Male;
