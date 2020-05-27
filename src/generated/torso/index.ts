import Folder from '../../Folder';
import Back from './back';
import Chain from './chain';
import Dress from './dress';
import Female from './female';
import Leather from './leather';
import Male from './male';
import Plate from './plate';
import Robes from './robes';
import Shirts from './shirts';
import Tunics from './tunics';

class Torso extends Folder {
  back() {
    return new Back(this.rootPath, this.path);
  }

  chain() {
    return new Chain(this.rootPath, this.path);
  }

  dress() {
    return new Dress(this.rootPath, this.path);
  }

  female() {
    return new Female(this.rootPath, this.path);
  }

  leather() {
    return new Leather(this.rootPath, this.path);
  }

  male() {
    return new Male(this.rootPath, this.path);
  }

  plate() {
    return new Plate(this.rootPath, this.path);
  }

  robes() {
    return new Robes(this.rootPath, this.path);
  }

  shirts() {
    return new Shirts(this.rootPath, this.path);
  }

  tunics() {
    return new Tunics(this.rootPath, this.path);
  }
}

export default Torso;
