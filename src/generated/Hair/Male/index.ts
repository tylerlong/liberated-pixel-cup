import Long from './Long';
import Folder from '../../../Folder';

class Male extends Folder {
  long() {
    return new Long(this.lpc, this.path);
  }
}

export default Male;
