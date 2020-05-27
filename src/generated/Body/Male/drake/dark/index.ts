import Folder from '../../../../../Folder';
import Complete from './complete';
import Nw from './nw';

class Dark extends Folder {
  complete() {
    return new Complete(this.rootPath, this.path);
  }

  nw() {
    return new Nw(this.rootPath, this.path);
  }
}

export default Dark;
