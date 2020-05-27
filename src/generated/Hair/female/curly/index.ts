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
import Darkblonde from './darkblonde';
import Darkgrey from './darkgrey';
import Darkred from './darkred';
import Default from './default';
import Gold from './gold';
import Green from './green';
import Green2 from './green2';
import Grey from './grey';
import Lightblonde from './lightblonde';
import Lightblonde2 from './lightblonde2';
import Pink from './pink';
import Pink2 from './pink2';
import Purple from './purple';
import Raven from './raven';
import Raven2 from './raven2';
import Red3 from './red3';
import Redhead from './redhead';
import Rubyhead from './rubyhead';
import White from './white';
import Whiteblonde from './whiteblonde';
import Whiteblonde2 from './whiteblonde2';
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

  darkblonde() {
    return new Darkblonde(this.rootPath, this.path);
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

  lightblonde() {
    return new Lightblonde(this.rootPath, this.path);
  }

  lightblonde2() {
    return new Lightblonde2(this.rootPath, this.path);
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

  red3() {
    return new Red3(this.rootPath, this.path);
  }

  redhead() {
    return new Redhead(this.rootPath, this.path);
  }

  rubyhead() {
    return new Rubyhead(this.rootPath, this.path);
  }

  white() {
    return new White(this.rootPath, this.path);
  }

  whiteblonde() {
    return new Whiteblonde(this.rootPath, this.path);
  }

  whiteblonde2() {
    return new Whiteblonde2(this.rootPath, this.path);
  }

  whitecyan() {
    return new Whitecyan(this.rootPath, this.path);
  }
}

export default Curly;
