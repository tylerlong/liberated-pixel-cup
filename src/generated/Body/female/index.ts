import Folder from '../../../Folder';
import Dark from './dark';
import Dark2 from './dark2';
import Darkelf from './darkelf';
import Darkelf2 from './darkelf2';
import Drake from './drake';
import Ears from './ears';
import Eyes from './eyes';
import Light from './light';
import Nose from './nose';
import Orcs from './orcs';
import Tanned from './tanned';
import Tanned2 from './tanned2';
import Woman from './woman';
import Zombie from './zombie';

class Female extends Folder {
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

  drake() {
    return new Drake(this.rootPath, this.path);
  }

  ears() {
    return new Ears(this.rootPath, this.path);
  }

  eyes() {
    return new Eyes(this.rootPath, this.path);
  }

  light() {
    return new Light(this.rootPath, this.path);
  }

  nose() {
    return new Nose(this.rootPath, this.path);
  }

  orcs() {
    return new Orcs(this.rootPath, this.path);
  }

  tanned() {
    return new Tanned(this.rootPath, this.path);
  }

  tanned2() {
    return new Tanned2(this.rootPath, this.path);
  }

  woman() {
    return new Woman(this.rootPath, this.path);
  }

  zombie() {
    return new Zombie(this.rootPath, this.path);
  }
}

export default Female;
