import Folder from '../../../../../../../Folder';
import Attack from './attack';
import Universal from './universal';

class Waraxe extends Folder {
  attack() {
    return new Attack(this.rootPath, this.path);
  }

  universal() {
    return new Universal(this.rootPath, this.path);
  }
}

export default Waraxe;
