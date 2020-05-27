import Folder from '../../../../../Folder';
import Dark from './dark';
import Dark2 from './dark2';
import Darkelf from './darkelf';
import Darkelf2 from './darkelf2';
import Light from './light';
import Tanned from './tanned';
import Tanned2 from './tanned2';

class Elvenears extends Folder {
  dark() {
    return new Dark(this.rootPath, this.path);
  }

  dark2() {
    return new Dark2(this.rootPath, this.path);
  }

  darkelf() {
    return new Darkelf(this.rootPath, this.path);
  }

  darkelf2() {
    return new Darkelf2(this.rootPath, this.path);
  }

  light() {
    return new Light(this.rootPath, this.path);
  }

  tanned() {
    return new Tanned(this.rootPath, this.path);
  }

  tanned2() {
    return new Tanned2(this.rootPath, this.path);
  }
}

export default Elvenears;
