import Folder from '../../Folder';
import Male from './Male';

class Body extends Folder {
  male() {
    return new Male(this.path());
  }
}

export default Body;