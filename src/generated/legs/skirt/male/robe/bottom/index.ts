import Folder from '../../../../../../Folder';
import Dark from './dark';
import White from './white';

class Bottom extends Folder {
  dark() {
    return new Dark(this.rootPath, this.path);
  }

  white() {
    return new White(this.rootPath, this.path);
  }
}

export default Bottom;
