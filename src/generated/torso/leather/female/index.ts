import Folder from '../../../../Folder';
import Legionbauldron from './legionbauldron';

class Female extends Folder {
  legionbauldron() {
    return new Legionbauldron(this.rootPath, this.path);
  }
}

export default Female;
