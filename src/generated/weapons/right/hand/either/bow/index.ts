import Folder from '../../../../../../Folder';
import Skeleton from './skeleton';

class Bow extends Folder {
  skeleton() {
    return new Skeleton(this.rootPath, this.path);
  }
}

export default Bow;
