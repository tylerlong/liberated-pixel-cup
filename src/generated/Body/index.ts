import Folder from '../../Folder';
import Male from './Male';

class Body extends Folder {
  male() {
    return new Male(this.rootPath, this.path);
  }
}

export default Body;
