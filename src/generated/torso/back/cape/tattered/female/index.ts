import Folder from '../../../../../../Folder';
import Tattercape from './tattercape';

class Female extends Folder {
  tattercape() {
    return new Tattercape(this.rootPath, this.path);
  }
}

export default Female;
