import Folder from '../../Folder';
import Buckles from './buckles';
import Cloth from './cloth';
import Formal from './formal';
import Leather from './leather';
import Metal from './metal';

class Belt extends Folder {
  buckles() {
    return new Buckles(this.rootPath, this.path);
  }

  cloth() {
    return new Cloth(this.rootPath, this.path);
  }

  formal() {
    return new Formal(this.rootPath, this.path);
  }

  leather() {
    return new Leather(this.rootPath, this.path);
  }

  metal() {
    return new Metal(this.rootPath, this.path);
  }
}

export default Belt;
