import Folder from '../../../../Folder';
import Chain from './chain';
import Cloth from './cloth';
import Male from './male';
import Wizard from './wizard';

class Female extends Folder {
  chain() {
    return new Chain(this.rootPath, this.path);
  }

  cloth() {
    return new Cloth(this.rootPath, this.path);
  }

  male() {
    return new Male(this.rootPath, this.path);
  }

  wizard() {
    return new Wizard(this.rootPath, this.path);
  }
}

export default Female;
