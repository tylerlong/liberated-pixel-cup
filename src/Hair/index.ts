import Male from './Male';
import BaseClass from '../BaseClass';

class Hair extends BaseClass {
  male() {
    return new Male(this.path());
  }
}

export default Hair;
