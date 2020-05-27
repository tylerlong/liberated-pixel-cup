import Folder from '../../../../Folder';
import Wd from './wd';

class A33 extends Folder {
  wd() {
    return new Wd(this.rootPath, this.path);
  }
}

export default A33;
