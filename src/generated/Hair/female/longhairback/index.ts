import Folder from '../../../../Folder';
import Black from './black';
import Brunette from './brunette';
import Gold from './gold';
import Purple from './purple';
import Red from './red';

class Longhairback extends Folder {
  black() {
    return new Black(this.rootPath, this.path);
  }

  brunette() {
    return new Brunette(this.rootPath, this.path);
  }

  gold() {
    return new Gold(this.rootPath, this.path);
  }

  purple() {
    return new Purple(this.rootPath, this.path);
  }

  red() {
    return new Red(this.rootPath, this.path);
  }
}

export default Longhairback;
