import Folder from '../../../../Folder';
import Shirt from './shirt';

class Child extends Folder {
  shirt() {
    return new Shirt(this.rootPath, this.path);
  }
}

export default Child;
