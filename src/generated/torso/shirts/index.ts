import Folder from '../../../Folder';
import Apron from './apron';
import Bandage from './bandage';
import Blouse from './blouse';
import Child from './child';
import Corset from './corset';
import Dress from './dress';
import Formal from './formal';
import Longsleeve from './longsleeve';
import Ls from './ls';
import Pirate from './pirate';
import Pregnant from './pregnant';
import Scoop from './scoop';
import Sleeveless from './sleeveless';

class Shirts extends Folder {
  apron() {
    return new Apron(this.rootPath, this.path);
  }

  bandage() {
    return new Bandage(this.rootPath, this.path);
  }

  blouse() {
    return new Blouse(this.rootPath, this.path);
  }

  child() {
    return new Child(this.rootPath, this.path);
  }

  corset() {
    return new Corset(this.rootPath, this.path);
  }

  dress() {
    return new Dress(this.rootPath, this.path);
  }

  formal() {
    return new Formal(this.rootPath, this.path);
  }

  longsleeve() {
    return new Longsleeve(this.rootPath, this.path);
  }

  ls() {
    return new Ls(this.rootPath, this.path);
  }

  pirate() {
    return new Pirate(this.rootPath, this.path);
  }

  pregnant() {
    return new Pregnant(this.rootPath, this.path);
  }

  scoop() {
    return new Scoop(this.rootPath, this.path);
  }

  sleeveless() {
    return new Sleeveless(this.rootPath, this.path);
  }
}

export default Shirts;
