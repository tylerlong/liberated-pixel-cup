import Dark from './Dark';
import BaseClass from '../../BaseClass';

class Male extends BaseClass {
  dark() {
    return new Dark(this.path());
  }
}

export default Male;
