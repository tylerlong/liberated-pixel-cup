import Long from './Long';
import BaseClass from '../../BaseClass';

class Male extends BaseClass {
  long() {
    return new Long(this.path());
  }
}

export default Male;
