import Folder from '../../Folder';
import Armor from './armor';
import Pants from './pants';
import Pregnant from './pregnant';
import Skirt from './skirt';

class Legs extends Folder {
  armor() {
    return new Armor(this.rootPath, this.path);
  }

  pants() {
    return new Pants(this.rootPath, this.path);
  }

  pregnant() {
    return new Pregnant(this.rootPath, this.path);
  }

  skirt() {
    return new Skirt(this.rootPath, this.path);
  }
}

export default Legs;
