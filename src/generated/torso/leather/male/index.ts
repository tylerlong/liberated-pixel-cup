import Folder from '../../../../Folder';
import Legionbauldron from './legionbauldron';

class Male extends Folder {
  legionbauldron() {
    return new Legionbauldron(this.rootPath, this.path);
  }
}

export default Male;
