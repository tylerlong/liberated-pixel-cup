import Folder from '../../../../Folder';
import Fem from './fem';

class Drake extends Folder {
  fem() {
    return new Fem(this.rootPath, this.path);
  }
}

export default Drake;
