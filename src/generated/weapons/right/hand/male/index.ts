import Folder from '../../../../../Folder';
import Axe from './axe';
import Axe2 from './axe2';
import Dagger from './dagger';
import Pickaxe from './pickaxe';
import Spear from './spear';
import Warhammer from './warhammer';
import Woodwand from './woodwand';

class Male extends Folder {
  axe() {
    return new Axe(this.rootPath, this.path);
  }

  axe2() {
    return new Axe2(this.rootPath, this.path);
  }

  dagger() {
    return new Dagger(this.rootPath, this.path);
  }

  pickaxe() {
    return new Pickaxe(this.rootPath, this.path);
  }

  spear() {
    return new Spear(this.rootPath, this.path);
  }

  warhammer() {
    return new Warhammer(this.rootPath, this.path);
  }

  woodwand() {
    return new Woodwand(this.rootPath, this.path);
  }
}

export default Male;
