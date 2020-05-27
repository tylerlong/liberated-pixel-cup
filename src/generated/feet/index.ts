import Folder from '../../Folder';
import Armor from './armor';
import Ghillies from './ghillies';
import Shoes from './shoes';
import Slippers from './slippers';

class Feet extends Folder {
  armor() {
    return new Armor(this.rootPath, this.path);
  }

  ghillies() {
    return new Ghillies(this.rootPath, this.path);
  }

  shoes() {
    return new Shoes(this.rootPath, this.path);
  }

  slippers() {
    return new Slippers(this.rootPath, this.path);
  }
}

export default Feet;
