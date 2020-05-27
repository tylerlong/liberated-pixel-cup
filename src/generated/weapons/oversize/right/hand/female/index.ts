import Folder from '../../../../../../Folder';
import _15 from './15';
import _19 from './19';
import _23 from './23';
import _27 from './27';
import Flail from './flail';
import Glowsword from './glowsword';
import Halberd from './halberd';
import Longsword from './longsword';
import Mace from './mace';
import Rapier from './rapier';
import Saber from './saber';
import Waraxe from './waraxe';

class Female extends Folder {
  _15() {
    return new _15(this.rootPath, this.path);
  }

  _19() {
    return new _19(this.rootPath, this.path);
  }

  _23() {
    return new _23(this.rootPath, this.path);
  }

  _27() {
    return new _27(this.rootPath, this.path);
  }

  flail() {
    return new Flail(this.rootPath, this.path);
  }

  glowsword() {
    return new Glowsword(this.rootPath, this.path);
  }

  halberd() {
    return new Halberd(this.rootPath, this.path);
  }

  longsword() {
    return new Longsword(this.rootPath, this.path);
  }

  mace() {
    return new Mace(this.rootPath, this.path);
  }

  rapier() {
    return new Rapier(this.rootPath, this.path);
  }

  saber() {
    return new Saber(this.rootPath, this.path);
  }

  waraxe() {
    return new Waraxe(this.rootPath, this.path);
  }
}

export default Female;
