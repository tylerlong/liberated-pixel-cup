import Folder from '../../../../Folder';
import Bronze from './bronze';
import Gold from './gold';
import Iron from './iron';
import Purple from './purple';
import Silver from './silver';

class Female extends Folder {
  bronze() {
    return new Bronze(this.rootPath, this.path);
  }

  gold() {
    return new Gold(this.rootPath, this.path);
  }

  iron() {
    return new Iron(this.rootPath, this.path);
  }

  purple() {
    return new Purple(this.rootPath, this.path);
  }

  silver() {
    return new Silver(this.rootPath, this.path);
  }
}

export default Female;
