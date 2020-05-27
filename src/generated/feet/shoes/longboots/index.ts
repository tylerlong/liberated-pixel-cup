import Folder from '../../../../Folder';
import Brown from './brown';
import Dark from './dark';

class Longboots extends Folder {
  brown() {
    return new Brown(this.rootPath, this.path);
  }

  dark() {
    return new Dark(this.rootPath, this.path);
  }
}

export default Longboots;
