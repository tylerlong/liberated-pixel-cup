import Folder from '../../../../Folder';
import Black from './black';
import Brown from './brown';
import Dark from './dark';
import Dark2 from './dark2';
import Darkelf from './darkelf';
import Darkelf2 from './darkelf2';
import Light from './light';
import Lizard from './lizard';
import Olive from './olive';
import Orc from './orc';
import Peach from './peach';
import Redorc from './redorc';
import Tanned from './tanned';
import Tanned2 from './tanned2';
import White from './white';

class Walk extends Folder {
  black() {
    return new Black(this.rootPath, this.path);
  }

  brown() {
    return new Brown(this.rootPath, this.path);
  }

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

  lizard() {
    return new Lizard(this.rootPath, this.path);
  }

  olive() {
    return new Olive(this.rootPath, this.path);
  }

  orc() {
    return new Orc(this.rootPath, this.path);
  }

  peach() {
    return new Peach(this.rootPath, this.path);
  }

  redorc() {
    return new Redorc(this.rootPath, this.path);
  }

  tanned() {
    return new Tanned(this.rootPath, this.path);
  }

  tanned2() {
    return new Tanned2(this.rootPath, this.path);
  }

  white() {
    return new White(this.rootPath, this.path);
  }
}

export default Walk;
