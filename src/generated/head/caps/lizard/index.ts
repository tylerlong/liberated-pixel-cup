import Folder from '../../../../Folder';
import Banage2 from './banage2';
import Hood2 from './hood2';

class Lizard extends Folder {
  banage2() {
    return new Banage2(this.rootPath, this.path);
  }

  hood2() {
    return new Hood2(this.rootPath, this.path);
  }
}

export default Lizard;
