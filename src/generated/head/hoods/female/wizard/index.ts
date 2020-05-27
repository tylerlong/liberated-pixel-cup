import Folder from '../../../../../Folder';
import Hat from './hat';

class Wizard extends Folder {
  hat() {
    return new Hat(this.rootPath, this.path);
  }
}

export default Wizard;
