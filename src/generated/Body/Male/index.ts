import Dark from './Dark';
import Folder from '../../../Folder';

class Male extends Folder {
  dark() {
    return new Dark(this.lpc, this.path);
  }
}

export default Male;
