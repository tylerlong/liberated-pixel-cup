import Folder from '../../../../../Folder';
import Dark2body from './dark2body';
import Darkbody from './darkbody';
import Lightbody from './lightbody';
import Tanned2body from './tanned2body';
import Tannedbody from './tannedbody';

class Shadows extends Folder {
  dark2body() {
    return new Dark2body(this.rootPath, this.path);
  }

  darkbody() {
    return new Darkbody(this.rootPath, this.path);
  }

  lightbody() {
    return new Lightbody(this.rootPath, this.path);
  }

  tanned2body() {
    return new Tanned2body(this.rootPath, this.path);
  }

  tannedbody() {
    return new Tannedbody(this.rootPath, this.path);
  }
}

export default Shadows;
