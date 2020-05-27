import Folder from '../../../../../../../../Folder';
import Brown from './brown';
import Gray from './gray';

class Dark extends Folder {
  brown() {
    return new Brown(this.rootPath, this.path);
  }

  gray() {
    return new Gray(this.rootPath, this.path);
  }
}

export default Dark;
