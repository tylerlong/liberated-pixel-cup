import Folder from '../../../../Folder';
import Magenta from './magenta';
import Red from './red';
import Saraleggings from './saraleggings';
import Teal from './teal';
import White from './white';

class Female extends Folder {
  magenta() {
    return new Magenta(this.rootPath, this.path);
  }

  red() {
    return new Red(this.rootPath, this.path);
  }

  saraleggings() {
    return new Saraleggings(this.rootPath, this.path);
  }

  teal() {
    return new Teal(this.rootPath, this.path);
  }

  white() {
    return new White(this.rootPath, this.path);
  }
}

export default Female;
