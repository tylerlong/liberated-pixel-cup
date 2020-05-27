import Folder from '../../../../Folder';
import Chain from './chain';
import Cloth from './cloth';
import Lulhat from './lulhat';
import Hood from './hood';
import Wizard from './wizard';

class Male extends Folder {
  chain() {
    return new Chain(this.rootPath, this.path);
  }

  cloth() {
    return new Cloth(this.rootPath, this.path);
  }

  lulhat() {
    return new Lulhat(this.rootPath, this.path);
  }

  hood() {
    return new Hood(this.rootPath, this.path);
  }

  wizard() {
    return new Wizard(this.rootPath, this.path);
  }
}

export default Male;
