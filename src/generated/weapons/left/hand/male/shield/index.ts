import Folder from '../../../../../../Folder';
import Black from './black';
import Brown from './brown';
import Gold from './gold';
import Green from './green';
import Silver from './silver';
import Yellow from './yellow';

class Shield extends Folder {
  black() {
    return new Black(this.rootPath, this.path);
  }

  brown() {
    return new Brown(this.rootPath, this.path);
  }

  gold() {
    return new Gold(this.rootPath, this.path);
  }

  green() {
    return new Green(this.rootPath, this.path);
  }

  silver() {
    return new Silver(this.rootPath, this.path);
  }

  yellow() {
    return new Yellow(this.rootPath, this.path);
  }
}

export default Shield;
