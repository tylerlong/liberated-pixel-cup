import Folder from '../../../../Folder';
import Hat from './hat';
import Tophat from './tophat';

class Formal extends Folder {
  hat() {
    return new Hat(this.rootPath, this.path);
  }

  tophat() {
    return new Tophat(this.rootPath, this.path);
  }
}

export default Formal;
