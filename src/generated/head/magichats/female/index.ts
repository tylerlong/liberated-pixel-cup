import Folder from '../../../../Folder';
import Black from './black';
import Brown from './brown';
import Gray from './gray';
import Red from './red';
import Teal from './teal';
import Yellow from './yellow';

class Female extends Folder {
  black() {
    return new Black(this.rootPath, this.path);
  }

  brown() {
    return new Brown(this.rootPath, this.path);
  }

  gray() {
    return new Gray(this.rootPath, this.path);
  }

  red() {
    return new Red(this.rootPath, this.path);
  }

  teal() {
    return new Teal(this.rootPath, this.path);
  }

  yellow() {
    return new Yellow(this.rootPath, this.path);
  }
}

export default Female;
