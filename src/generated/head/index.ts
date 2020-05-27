import Folder from '../../Folder';
import Bandanas from './bandanas';
import Caps from './caps';
import Crown from './crown';
import Helms from './helms';
import Hoods from './hoods';
import Horned from './horned';
import Magichats from './magichats';
import Plate from './plate';
import Tiaras from './tiaras';

class Head extends Folder {
  bandanas() {
    return new Bandanas(this.rootPath, this.path);
  }

  caps() {
    return new Caps(this.rootPath, this.path);
  }

  crown() {
    return new Crown(this.rootPath, this.path);
  }

  helms() {
    return new Helms(this.rootPath, this.path);
  }

  hoods() {
    return new Hoods(this.rootPath, this.path);
  }

  horned() {
    return new Horned(this.rootPath, this.path);
  }

  magichats() {
    return new Magichats(this.rootPath, this.path);
  }

  plate() {
    return new Plate(this.rootPath, this.path);
  }

  tiaras() {
    return new Tiaras(this.rootPath, this.path);
  }
}

export default Head;
