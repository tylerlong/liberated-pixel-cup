import Folder from '../../../../../Folder';
import Tanktop from './tanktop';

class Clothes extends Folder {
  tanktop() {
    return new Tanktop(this.rootPath, this.path);
  }
}

export default Clothes;
