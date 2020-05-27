import Folder from '../../../../Folder';
import Wd from './wd';

class A37 extends Folder {
  wd() {
    return new Wd(this.rootPath, this.path);
  }
}

export default A37;
