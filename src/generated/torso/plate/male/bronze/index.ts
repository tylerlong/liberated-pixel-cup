import Folder from '../../../../../Folder';
import Johannes from './johannes';

class Bronze extends Folder {
  johannes() {
    return new Johannes(this.rootPath, this.path);
  }
}

export default Bronze;
