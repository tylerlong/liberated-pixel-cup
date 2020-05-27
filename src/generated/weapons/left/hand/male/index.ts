import Folder from '../../../../../Folder';
import Crusader from './crusader';
import Kiteshield from './kiteshield';
import Shield from './shield';
import Spartan from './spartan';

class Male extends Folder {
  crusader() {
    return new Crusader(this.rootPath, this.path);
  }

  kiteshield() {
    return new Kiteshield(this.rootPath, this.path);
  }

  shield() {
    return new Shield(this.rootPath, this.path);
  }

  spartan() {
    return new Spartan(this.rootPath, this.path);
  }
}

export default Male;
