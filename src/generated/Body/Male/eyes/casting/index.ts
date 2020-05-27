import Folder from '../../../../../Folder';
import Eyeglow from './eyeglow';

class Casting extends Folder {
  eyeglow() {
    return new Eyeglow(this.rootPath, this.path);
  }
}

export default Casting;
