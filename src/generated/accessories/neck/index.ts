import Folder from '../../../Folder';
import Capeclip from './capeclip';
import Capetie from './capetie';
import Scarf from './scarf';

class Neck extends Folder {
  capeclip() {
    return new Capeclip(this.rootPath, this.path);
  }

  capetie() {
    return new Capetie(this.rootPath, this.path);
  }

  scarf() {
    return new Scarf(this.rootPath, this.path);
  }
}

export default Neck;
