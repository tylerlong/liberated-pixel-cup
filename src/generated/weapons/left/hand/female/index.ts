import Folder from '../../../../../Folder';
import Crusader from './crusader';
import Spartan from './spartan';

class Female extends Folder {
  crusader() {
    return new Crusader(this.rootPath, this.path);
  }

  spartan() {
    return new Spartan(this.rootPath, this.path);
  }
}

export default Female;
