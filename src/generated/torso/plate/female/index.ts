import Folder from '../../../../Folder';
import Legionplate from './legionplate';
import Bronze from './bronze';

class Female extends Folder {
  legionplate() {
    return new Legionplate(this.rootPath, this.path);
  }

  bronze() {
    return new Bronze(this.rootPath, this.path);
  }
}

export default Female;
