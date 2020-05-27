import Folder from '../../../../../../../../Folder';
import Gray from './gray';

class Light extends Folder {
  gray() {
    return new Gray(this.rootPath, this.path);
  }
}

export default Light;
