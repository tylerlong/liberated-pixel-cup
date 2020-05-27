import Folder from '../../../../Folder';
import Wd from './wd';

class A34 extends Folder {
  wd() {
    return new Wd(this.rootPath, this.path);
  }
}

export default A34;
