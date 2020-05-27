import Folder from '../../../Folder';
import Chest from './chest';
import Female from './female';
import Male from './male';
import Shoulders from './shoulders';
import Singlebauldron from './singlebauldron';

class Leather extends Folder {
  chest() {
    return new Chest(this.rootPath, this.path);
  }

  female() {
    return new Female(this.rootPath, this.path);
  }

  male() {
    return new Male(this.rootPath, this.path);
  }

  shoulders() {
    return new Shoulders(this.rootPath, this.path);
  }

  singlebauldron() {
    return new Singlebauldron(this.rootPath, this.path);
  }
}

export default Leather;
