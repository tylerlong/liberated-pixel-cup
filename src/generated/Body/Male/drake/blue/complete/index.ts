import Folder from '../../../../../../Folder';
import Nw from './nw';

class Complete extends Folder {
  nw() {
    return new Nw(this.rootPath, this.path);
  }
}

export default Complete;
