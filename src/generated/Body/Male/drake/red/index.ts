import Folder from '../../../../../Folder';
import Complete from './complete';

class Red extends Folder {
  complete() {
    return new Complete(this.rootPath, this.path);
  }
}

export default Red;
