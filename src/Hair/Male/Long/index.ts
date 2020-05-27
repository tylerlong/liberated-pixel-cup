import Blue from './Blue';
import Folder from '../../../Folder';

class Long extends Folder {
  blue() {
    return new Blue(this.path());
  }
}

export default Long;
