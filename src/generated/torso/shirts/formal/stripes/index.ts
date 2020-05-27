import Folder from '../../../../../Folder';
import Shirt from './shirt';

class Stripes extends Folder {
  shirt() {
    return new Shirt(this.rootPath, this.path);
  }
}

export default Stripes;
