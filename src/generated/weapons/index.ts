import Folder from '../../Folder';
import Both from './both';
import Left from './left';
import Oversize from './oversize';
import Right from './right';

class Weapons extends Folder {
  both() {
    return new Both(this.rootPath, this.path);
  }

  left() {
    return new Left(this.rootPath, this.path);
  }

  oversize() {
    return new Oversize(this.rootPath, this.path);
  }

  right() {
    return new Right(this.rootPath, this.path);
  }
}

export default Weapons;
