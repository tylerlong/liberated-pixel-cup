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
import Cyan from './cyan';
import Darkblonde from './darkblonde';
import Darkgray from './darkgray';
import Darkred from './darkred';
import Default from './default';
import Gold from './gold';
import Gray from './gray';
import Green from './green';
import Green2 from './green2';
import Lightblonde from './lightblonde';
import Lightblonde2 from './lightblonde2';
import Pink from './pink';
import Pink2 from './pink2';
import Purple from './purple';
import Raven from './raven';
import Raven2 from './raven2';
import Red from './red';
import Red2 from './red2';
import Ruby from './ruby';
import White from './white';
import Whiteblonde from './whiteblonde';
import Whiteblonde2 from './whiteblonde2';

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

  cyan() {
    return new Cyan(this.rootPath, this.path);
  }

  darkblonde() {
    return new Darkblonde(this.rootPath, this.path);
  }

  darkgray() {
    return new Darkgray(this.rootPath, this.path);
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

  gray() {
    return new Gray(this.rootPath, this.path);
  }

  green() {
    return new Green(this.rootPath, this.path);
  }

  green2() {
    return new Green2(this.rootPath, this.path);
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

  whiteblonde() {
    return new Whiteblonde(this.rootPath, this.path);
  }

  whiteblonde2() {
    return new Whiteblonde2(this.rootPath, this.path);
  }
}

export default Curly;
