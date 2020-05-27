import Folder from '../../../Folder';
import Shadow from './shadow';

class Lpc extends Folder {
  shadow() {
    return new Shadow(this.rootPath, this.path);
  }
}

export default Lpc;
