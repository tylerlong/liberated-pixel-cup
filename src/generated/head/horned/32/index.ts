import Folder from '../../../../Folder';
import Wd from './wd';

class A32 extends Folder {
  wd() {
    return new Wd(this.rootPath, this.path);
  }
}

export default A32;
