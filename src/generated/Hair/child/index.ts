import Folder from '../../../Folder';
import Braid from './braid';
import Curly from './curly';
import Halfmessy from './halfmessy';

class Child extends Folder {
  braid() {
    return new Braid(this.rootPath, this.path);
  }

  curly() {
    return new Curly(this.rootPath, this.path);
  }

  halfmessy() {
    return new Halfmessy(this.rootPath, this.path);
  }
}

export default Child;
