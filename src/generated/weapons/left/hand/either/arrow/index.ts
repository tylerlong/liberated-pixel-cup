import Folder from '../../../../../../Folder';
import Skeleton from './skeleton';

class Arrow extends Folder {
  skeleton() {
    return new Skeleton(this.rootPath, this.path);
  }
}

export default Arrow;
