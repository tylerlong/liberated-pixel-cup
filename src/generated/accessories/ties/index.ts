import Folder from '../../../Folder';
import Formal from './formal';

class Ties extends Folder {
  formal() {
    return new Formal(this.rootPath, this.path);
  }
}

export default Ties;
