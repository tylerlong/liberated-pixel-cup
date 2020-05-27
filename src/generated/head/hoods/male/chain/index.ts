import Folder from '../../../../../Folder';
import Hood from './hood';

class Chain extends Folder {
  hood() {
    return new Hood(this.rootPath, this.path);
  }
}

export default Chain;
