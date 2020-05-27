import Folder from '../../../../Folder';
import Bignose from './bignose';
import Buttonnose from './buttonnose';
import Straightnose from './straightnose';

class Nose extends Folder {
  bignose() {
    return new Bignose(this.rootPath, this.path);
  }

  buttonnose() {
    return new Buttonnose(this.rootPath, this.path);
  }

  straightnose() {
    return new Straightnose(this.rootPath, this.path);
  }
}

export default Nose;
