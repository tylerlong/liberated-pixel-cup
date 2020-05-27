import Folder from '../../../../../../Folder';
import Krohn from './krohn';

class Matthew extends Folder {
  krohn() {
    return new Krohn(this.rootPath, this.path);
  }
}

export default Matthew;
