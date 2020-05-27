import Folder from '../../../Folder';
import Bracelet from './bracelet';

class Bracelets extends Folder {
  bracelet() {
    return new Bracelet(this.rootPath, this.path);
  }
}

export default Bracelets;
