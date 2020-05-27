import Folder from '../../../../Folder';
import Black from './black';
import Brunette from './brunette';
import Gold from './gold';
import Red from './red';
import Red0 from './red0';

class Halfmessy extends Folder {
  black() {
    return new Black(this.rootPath, this.path);
  }

  brunette() {
    return new Brunette(this.rootPath, this.path);
  }

  gold() {
    return new Gold(this.rootPath, this.path);
  }

  red() {
    return new Red(this.rootPath, this.path);
  }

  red0() {
    return new Red0(this.rootPath, this.path);
  }
}

export default Halfmessy;
