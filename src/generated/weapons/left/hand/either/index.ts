import Folder from '../../../../../Folder';
import Arrow from './arrow';

class Either extends Folder {
  arrow() {
    return new Arrow(this.rootPath, this.path);
  }
}

export default Either;
