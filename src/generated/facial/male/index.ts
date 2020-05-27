import Folder from '../../../Folder';
import Mask from './mask';
import Maskdark from './maskdark';
import Beard from './beard';
import Bigstache from './bigstache';
import Mustache from './mustache';

class Male extends Folder {
  mask() {
    return new Mask(this.rootPath, this.path);
  }

  maskdark() {
    return new Maskdark(this.rootPath, this.path);
  }

  beard() {
    return new Beard(this.rootPath, this.path);
  }

  bigstache() {
    return new Bigstache(this.rootPath, this.path);
  }

  mustache() {
    return new Mustache(this.rootPath, this.path);
  }
}

export default Male;
