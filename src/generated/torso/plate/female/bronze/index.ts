import Folder from '../../../../../Folder';
import Matthew from './matthew';

class Bronze extends Folder {
  matthew() {
    return new Matthew(this.rootPath, this.path);
  }
}

export default Bronze;
