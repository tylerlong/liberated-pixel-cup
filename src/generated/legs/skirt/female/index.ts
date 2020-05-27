import Folder from '../../../../Folder';
import Legionskirt from './legionskirt';
import Robe from './robe';

class Female extends Folder {
  legionskirt() {
    return new Legionskirt(this.rootPath, this.path);
  }

  robe() {
    return new Robe(this.rootPath, this.path);
  }
}

export default Female;
