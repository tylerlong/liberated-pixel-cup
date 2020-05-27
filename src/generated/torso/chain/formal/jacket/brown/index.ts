import Folder from '../../../../../../Folder';
import Stripes from './stripes';

class Brown extends Folder {
  stripes() {
    return new Stripes(this.rootPath, this.path);
  }
}

export default Brown;
