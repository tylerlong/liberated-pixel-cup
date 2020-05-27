import Folder from '../../../../../Folder';
import Sleevless from './sleevless';

class Male extends Folder {
  sleevless() {
    return new Sleevless(this.rootPath, this.path);
  }
}

export default Male;
