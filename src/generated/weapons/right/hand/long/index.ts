import Folder from '../../../../../Folder';
import Knife from './knife';

class Long extends Folder {
  knife() {
    return new Knife(this.rootPath, this.path);
  }
}

export default Long;
