import Folder from '../../../../../../Folder';
import Trimcape from './trimcape';

class Female extends Folder {
  trimcape() {
    return new Trimcape(this.rootPath, this.path);
  }
}

export default Female;
