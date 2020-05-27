import Folder from '../../../Folder';
import Cape from './cape';
import Wings from './wings';

class Back extends Folder {
  cape() {
    return new Cape(this.rootPath, this.path);
  }

  wings() {
    return new Wings(this.rootPath, this.path);
  }
}

export default Back;
