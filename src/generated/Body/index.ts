import Folder from '../../Folder';
import _24 from './24';
import _25 from './25';
import Arm from './arm';
import Bauldric from './bauldric';
import Brain from './brain';
import Child from './child';
import Eye from './eye';
import Female from './female';
import Lpc from './lpc';
import Magician from './magician';
import Male from './male';
import Mouth from './mouth';
import None from './none';
import Pregnant from './pregnant';
import Ribs from './ribs';
import Zombie from './zombie';

class Body extends Folder {
  _24() {
    return new _24(this.rootPath, this.path);
  }

  _25() {
    return new _25(this.rootPath, this.path);
  }

  arm() {
    return new Arm(this.rootPath, this.path);
  }

  bauldric() {
    return new Bauldric(this.rootPath, this.path);
  }

  brain() {
    return new Brain(this.rootPath, this.path);
  }

  child() {
    return new Child(this.rootPath, this.path);
  }

  eye() {
    return new Eye(this.rootPath, this.path);
  }

  female() {
    return new Female(this.rootPath, this.path);
  }

  lpc() {
    return new Lpc(this.rootPath, this.path);
  }

  magician() {
    return new Magician(this.rootPath, this.path);
  }

  male() {
    return new Male(this.rootPath, this.path);
  }

  mouth() {
    return new Mouth(this.rootPath, this.path);
  }

  none() {
    return new None(this.rootPath, this.path);
  }

  pregnant() {
    return new Pregnant(this.rootPath, this.path);
  }

  ribs() {
    return new Ribs(this.rootPath, this.path);
  }

  zombie() {
    return new Zombie(this.rootPath, this.path);
  }
}

export default Body;
