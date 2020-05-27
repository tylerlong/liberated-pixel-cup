import Folder from '../../../Folder';
import Blood from './blood';

class Arm extends Folder {
  blood() {
    return new Blood(this.rootPath, this.path);
  }
}

export default Arm;
