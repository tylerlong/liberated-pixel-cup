import Folder from '../../../../Folder';
import Black from './black';
import Blonde from './blonde';
import Blonde2 from './blonde2';
import Blue from './blue';
import Blue2 from './blue2';
import Brown from './brown';
import Brown2 from './brown2';
import Brunette from './brunette';
import Brunette2 from './brunette2';
import Darkblond from './darkblond';
import Darkgrey from './darkgrey';
import Darkred from './darkred';
import Default from './default';
import Gold from './gold';
import Green from './green';
import Green2 from './green2';
import Grey from './grey';
import Lightblond from './lightblond';
import Lightblond2 from './lightblond2';
import Pink from './pink';
import Pink2 from './pink2';
import Purple from './purple';
import Raven from './raven';
import Raven2 from './raven2';
import Red from './red';
import Red2 from './red2';
import Ruby from './ruby';
import White from './white';
import Whiteblond from './whiteblond';
import Whiteblond2 from './whiteblond2';
import Whitecyan from './whitecyan';

class Curly extends Folder {
  black() {
    return new Black(this.rootPath, this.path);
  }

  blonde() {
    return new Blonde(this.rootPath, this.path);
  }

  blonde2() {
    return new Blonde2(this.rootPath, this.path);
  }

  blue() {
    return new Blue(this.rootPath, this.path);
  }

  blue2() {
    return new Blue2(this.rootPath, this.path);
  }

  brown() {
    return new Brown(this.rootPath, this.path);
  }

  brown2() {
    return new Brown2(this.rootPath, this.path);
  }

  brunette() {
    return new Brunette(this.rootPath, this.path);
  }

  brunette2() {
    return new Brunette2(this.rootPath, this.path);
  }

  darkblond() {
    return new Darkblond(this.rootPath, this.path);
  }

  darkgrey() {
    return new Darkgrey(this.rootPath, this.path);
  }

  darkred() {
    return new Darkred(this.rootPath, this.path);
  }

  default() {
    return new Default(this.rootPath, this.path);
  }

  gold() {
    return new Gold(this.rootPath, this.path);
  }

  green() {
    return new Green(this.rootPath, this.path);
  }

  green2() {
    return new Green2(this.rootPath, this.path);
  }

  grey() {
    return new Grey(this.rootPath, this.path);
  }

  lightblond() {
    return new Lightblond(this.rootPath, this.path);
  }

  lightblond2() {
    return new Lightblond2(this.rootPath, this.path);
  }

  pink() {
    return new Pink(this.rootPath, this.path);
  }

  pink2() {
    return new Pink2(this.rootPath, this.path);
  }

  purple() {
    return new Purple(this.rootPath, this.path);
  }

  raven() {
    return new Raven(this.rootPath, this.path);
  }

  raven2() {
    return new Raven2(this.rootPath, this.path);
  }

  red() {
    return new Red(this.rootPath, this.path);
  }

  red2() {
    return new Red2(this.rootPath, this.path);
  }

  ruby() {
    return new Ruby(this.rootPath, this.path);
  }

  white() {
    return new White(this.rootPath, this.path);
  }

  whiteblond() {
    return new Whiteblond(this.rootPath, this.path);
  }

  whiteblond2() {
    return new Whiteblond2(this.rootPath, this.path);
  }

  whitecyan() {
    return new Whitecyan(this.rootPath, this.path);
  }
}

export default Curly;
