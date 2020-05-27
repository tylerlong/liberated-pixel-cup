import Folder from '../../../../../Folder';
import Cap from './cap';

class Leather extends Folder {
  cap() {
    return new Cap(this.rootPath, this.path);
  }
}

export default Leather;
