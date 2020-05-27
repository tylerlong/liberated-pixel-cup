import Folder from '../../../Folder';
import Coffee from './coffee';
import Comet from './comet';
import Copper from './copper';
import Dove from './dove';
import Gold from './gold';
import Gray from './gray';
import Ivory from './ivory';
import Sienna from './sienna';

class Pregnant extends Folder {
  coffee() {
    return new Coffee(this.rootPath, this.path);
  }

  comet() {
    return new Comet(this.rootPath, this.path);
  }

  copper() {
    return new Copper(this.rootPath, this.path);
  }

  dove() {
    return new Dove(this.rootPath, this.path);
  }

  gold() {
    return new Gold(this.rootPath, this.path);
  }

  gray() {
    return new Gray(this.rootPath, this.path);
  }

  ivory() {
    return new Ivory(this.rootPath, this.path);
  }

  sienna() {
    return new Sienna(this.rootPath, this.path);
  }
}

export default Pregnant;
