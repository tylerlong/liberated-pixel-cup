import Folder from '../../../../../../../../../../Folder';
import Only from './only';

class Sc extends Folder {
  only() {
    return new Only(this.rootPath, this.path);
  }
}

export default Sc;
