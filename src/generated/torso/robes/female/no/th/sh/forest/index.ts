import Folder from '../../../../../../../../Folder';
import Green from './green';

class Forest extends Folder {
  green() {
    return new Green(this.rootPath, this.path);
  }
}

export default Forest;
