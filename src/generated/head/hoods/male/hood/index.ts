import Folder from '../../../../../Folder';
import Black from './black';

class Hood extends Folder {
  black() {
    return new Black(this.rootPath, this.path);
  }
}

export default Hood;
