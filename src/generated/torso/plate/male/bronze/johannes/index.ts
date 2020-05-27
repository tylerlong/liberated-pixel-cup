import Folder from '../../../../../../Folder';
import Sj from './sj';

class Johannes extends Folder {
  sj() {
    return new Sj(this.rootPath, this.path);
  }
}

export default Johannes;
